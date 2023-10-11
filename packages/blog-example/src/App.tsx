import { useFetch, useFindMany } from "@gadgetinc/react";
import { Suspense, useEffect, useState } from "react";
import { api } from "./api.js";
import "./styles/App.css";

function ExampleFetch() {
  const [history, setHistory] = useState<any[]>([]);
  const [result, send] = useFetch("https://dummyjson.com/products");

  useEffect(() => {
    setHistory([...history, result]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <section className="card">
      <h2>Example Fetch</h2>
      <code>
        <pre>{JSON.stringify(history, null, 2)}</pre>
      </code>
      <button onClick={() => void send()}>Refetch</button>
    </section>
  );
}

function ExampleFetchInUseEffect() {
  const [history, setHistory] = useState<any[]>([]);
  const [result, send] = useFetch("https://dummyjson.com/products/add", {
    method: "POST",
    body: JSON.stringify({ title: "BMW Pencil" }),
    headers: {
      "content-type": "application/json",
    },
    json: true,
  });

  useEffect(() => {
    setHistory([...history, result]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <section className="card">
      <h2>Example Fetch from useEffect</h2>
      <code>
        <pre>{JSON.stringify(history, null, 2)}</pre>
      </code>
      <button onClick={() => void send()}>Fetch</button>
    </section>
  );
}

function ExampleFindMany() {
  const [history, setHistory] = useState<any[]>([]);
  const [result, send] = useFindMany(api.post);

  useEffect(() => {
    const { operation: _operation, ...keep } = result;
    setHistory([...history, keep]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

let suspended = false;
function SuspenseFallback() {
  suspended = true;
  return <div>suspended...</div>;
}
function ExampleSuspense() {
  return (
    <section className="card">
      <h2>Example Suspense</h2>
      <p>Ever suspended: {String(suspended)}</p>
      <Suspense fallback={<SuspenseFallback />}>
        <ExampleSuspenseInner />
      </Suspense>
    </section>
  );
}

function ExampleSuspenseInner() {
  const [history, setHistory] = useState<any[]>([]);
  const [result, send] = useFindMany(api.post, { suspense: true, sort: { id: "Descending" } });

  useEffect(() => {
    const { operation: _operation, ...keep } = result;
    setHistory([...history, keep]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <>
      <code>
        <pre>{JSON.stringify(history, null, 2)}</pre>
      </code>
      <button onClick={() => send()}>Refetch</button>
    </>
  );
}

function App() {
  return (
    <Suspense fallback={<>Suspended...</>}>
      <div className="App">
        <h1>Vite + Gadget</h1>
        <ExampleFetch />
        <ExampleFindMany />
        <ExampleSuspense />
        <ExampleFetchInUseEffect />
      </div>
    </Suspense>
  );
}

export default App;
