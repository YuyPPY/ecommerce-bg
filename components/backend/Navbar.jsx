import { Sun,AlignJustify,Bell,User  } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    // TODO: ປ່ຽນໄອຄອນຢູ່ໜ້າ backend

    <div className="flex items-center justify-between bg-slate-800 text-slate-50 ">
      {/* Icon*/}
      <button>
        <AlignJustify />
      </button>
      {/* 3 Icons */}
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
}
