"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function BestSellingProductsCart() {
  //TODO: ນີ້ບ່ອນຈັດການ Components best Sell Products ChartJs
  const data = {
    labels: ["Cabbage", "Watermelon", "Broccoli ", "Maize"],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 10, 20, 20],
        backgroundColor: [
          "rgba(0, 0, 255, 0.7)",
          "rgba(255, 0, 221, 0.7)",
          "rgba(2, 139, 71, 0.7)",
          "rgba(0, 0, 0, 0.7)",
        ],
        borderColor: [
          "rgba(0, 0, 255, 0.3)",
          "rgba(255, 0, 221, 0.3)",
          "rgba(2, 139, 71, 0.3)",
          "rgba(0, 0, 0, 0.3)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className= "dark:bg-slate-700 bg-slate-50  p-8 rounded-lg shadow-xl ">
      <h2 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-50">Best Selling</h2>
      {/* Chart */}
      <div className="p-4">
        <Pie data={data}/>
      </div>
    </div>
  );
}
