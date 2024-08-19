import React from "react";

export default function page(props: any) {
  const { params } = props;

  return <div>Company: {params.company}</div>;
}
