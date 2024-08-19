"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Page() {
  const partName = usePathname();
  return (
    <div>
      <Link
        className={partName === "/BT05/Home" ? "active" : ""}
        href={"/BT/BT05/Home"}
      >
        Home
      </Link>
      <Link
        className={partName === "/BT05/About" ? "active" : ""}
        href={"/BT/BT05/About"}
      >
        About
      </Link>
      <Link
        className={partName === "/BT05/Contact" ? "active" : ""}
        href={"/BT/BT05/Contact"}
      >
        Contact
      </Link>
      <Link
        className={partName === "/BT05/Login" ? "active" : ""}
        href={"/BT/BT05/Login"}
      >
        Login
      </Link>
    </div>
  );
}
