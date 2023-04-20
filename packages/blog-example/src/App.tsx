import { useFindMany } from "@gadgetinc/react";
import { useEffect, useState } from "react";
import { api } from "./api";
import "./styles/App.css";

function ExampleFindMany() {
  const [history, setHistory] = useState<any[]>([]);
  const [result, send] = useFindMany(api.post);

  useEffect(() => {
    const { operation, ...keep } = result;
    setHistory([...history, keep]);
  }, [result]);

  return (
    <section className="card">
      <h2>Example Find Many</h2>
      <code>
        <pre>{JSON.stringify(history, null, 2)}</pre>
      </code>
      <button onClick={() => send()}>Refetch</button>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Vite + Gadget</h1>
      <ExampleFindMany />
    </div>
  );
}

export default App;
