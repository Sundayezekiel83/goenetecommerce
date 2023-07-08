import React, { useState } from "react";
import "react-select-states-and-lga-in-nigeria/dist/index.css";

import { Select } from "react-select-states-and-lga-in-nigeria";

export default function SelectFunction() {
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleLgaChange = (e) => {
    setLga(e.target.value);
  };
  console.log("STATE", state);
  return (
    <Select
      state={state}
      lga={lga}
      changeState={handleStateChange}
      changeLga={handleLgaChange}
    />
  );
}
