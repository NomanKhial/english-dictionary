import { useEffect } from "react";
import { useAppContext } from "../AppContext";

export default function InputBox() {
  const { inputText, setInputText, getWordData } = useAppContext();

  return (
    <div className="input-box">
      <h1>Engling - Dictionary</h1>
      <input
        type="text"
        value={inputText}
        size={30}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={getWordData}>Get Meaning</button>
    </div>
  );
}
