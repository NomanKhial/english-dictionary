import { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext();


export default function AppContextProvider({ children }) {
  const [inputText, setInputText] = useState('')

  useeffect(()=>{
    getWordData()
  }, [])

  async function getWordData(){
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputText}`)
    const data = await response.json()
    setWordData(data)
  }
  const store = { name: "nomankhial" };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
