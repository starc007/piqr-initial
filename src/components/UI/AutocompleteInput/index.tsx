import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import Loader from "@components/Loader";
type Props = {};

const AutcompleteInput = (props: Props) => {
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<string[]>(["Adarsh", "Saurabh", "Sunil"]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);
  // useEffect(()=>{
  //   async function getItems() {
  //     // TODO:
  //     // 1. REPLACE WITH API DATA
  //     setLoading(true)
  //     // 2. <DEBOUNCE></DEBOUNCE>
  //     setTimeout(()=>{
  //       setItems(["ADARSH","RASHMITA","RASPBERRY"])
  //       setLoading(false)
  //     },1000)
  //   }
  //   getItems()
  // },[value])

  return (
    <>
     
    </>
  );
};

export default AutcompleteInput;
