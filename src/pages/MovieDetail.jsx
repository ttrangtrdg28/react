import React from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const params = useParams();

  console.log(params);
  return <div>Movie ID: {params.movieId}</div>;
}
