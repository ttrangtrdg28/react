// rfc
import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Home() {
  const [globalContext, setGlobalContext] = useContext(GlobalContext);
  console.log(globalContext);

  return <div>Home</div>;
}
