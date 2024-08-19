"use client";
import { usePathname } from "next/navigation";
import React from "react";

export default function page(props: any) {
  const { params } = props;
  return <div>Sản phẩm có ID là: {params.productDetail} </div>;
}
