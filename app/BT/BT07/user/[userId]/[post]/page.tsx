import React from "react";

export default function page(props: any) {
  const { params } = props;
  return <div>Danh sách bài viết của user Id: {params.userId}</div>;
}
