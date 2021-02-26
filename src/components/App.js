import React from 'react';
import Dashboard from "./Dashboard";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";

export default function App() {
  const [id, setId] = useLocalStorage('id');

  return (
    <div className="flex flex-col min-h-screen">
        {id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />}
    </div>
  );
}
