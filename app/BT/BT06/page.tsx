"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Page() {
  const partName = usePathname();

  return (
    <div>
      <Link
        className={partName === "/BT/BT06/Home" ? "active" : ""}
        href={"/BT/BT06/Home"}
      >
        Home
      </Link>
      <Link
        className={partName === "/BT/BT06/About" ? "active" : ""}
        href={"/BT/BT06/About"}
      >
        About
      </Link>
      <Link
        className={partName === "/BT/BT06/Contact" ? "active" : ""}
        href={"/BT/BT06/Contact"}
      >
        Contact
      </Link>
      <Link
        className={partName === "/BT/BT06/Login" ? "active" : ""}
        href={"/BT/BT06/Login"}
      >
        Login
      </Link>
    </div>
  );
}
