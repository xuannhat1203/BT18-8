import React from "react";

export default function page(props: any) {
  const { params } = props;
  return <div>Danh sách nhiệm vụ của dự án có ai đi: {params.id}</div>;
}
