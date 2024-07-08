import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-slate-800 space-y-6 w-52 h-screen text-slate-50 p-3 ">
      <Link className="mb-6" href="#">Logo</Link>
      <div className="space-y-3 flex flex-col ">
        {/* TODO: ຂຽນຊື່ລາວໃນໜ້າ dashboard and Logo */}
        <Link href="#">Dashboard</Link>
        <Link href="#">Catalogue</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Markers</Link>
        <Link href="#">Farmers</Link>
        <Link href="#">Orders</Link>
        <Link href="#">Staff</Link>
        <Link href="#">Settings</Link>
        <Link href="#">Onlinr Store</Link>
      </div>
    </div>
  );
}