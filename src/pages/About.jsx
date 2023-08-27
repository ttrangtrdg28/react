// rfc
import React from "react";
import { useSearchParams } from "react-router-dom";

export default function About() {
  const [queryParams] = useSearchParams();

  // const searchParam = useSearchParams()
  // const [queryParams] = searchParams;

  console.log(queryParams.get("keyword"));
  console.log(queryParams.get("userId"));

  return (
    <div>
      <p>Keyword: {queryParams.get("keyword")}</p>
      <p>User ID: {queryParams.get("userId")}</p>
    </div>
  );
}
