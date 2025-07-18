import { useAppContext } from "./AppContext";
import { Details } from "./Components/Details";
import InputBox from "./Components/InputBox";
import React from "react";

function App() {
  return (
    <div className="container">
      <InputBox />
      <Details />
    </div>
  );
}

export default App;
