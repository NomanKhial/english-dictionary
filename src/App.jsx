import { useAppContext } from "./AppContext";

function App() {
  const {name} = useAppContext()
  return <h1>Hello {name}</h1>;
}

export default App;
