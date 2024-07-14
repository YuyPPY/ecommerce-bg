import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="dark:bg-slate-700 bg-white  space-y-6 w-64 h-screen text-slate-800 px-6 py-4 dark:text-slate-50 p-3  fixed left-0 top-0 shadow-md">
      <Link className="mb-6" href="#">
      <Image src="/logo-bg.png" alt="Bookgarden Logo" className="" width={75} height={75}/>
      </Link>
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
