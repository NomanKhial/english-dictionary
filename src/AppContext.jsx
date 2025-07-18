import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [inputText, setInputText] = useState("");
  const [wordData, setWordData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getWordData() {
    try {
      if (inputText.trim() == "") {
        throw new Error("Enter text to search!");
      }
      setLoading(true);
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`
      );

      if (!response.ok) {
        const responseText =
          response.status === 404
            ? "No definition found for that word."
            : "Something went wrong!";
        throw new Error(responseText);
      }

      const data = await response.json();
      setWordData(data);
      setLoading(false);
      setInputText("");
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  }

  const store = { wordData, inputText, setInputText, loading, getWordData };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
