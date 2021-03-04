import React, { useRef } from "react";
import { v4 as uuidV4 } from 'uuid';

export default function Login({ onIdSubmit }) {
  const idRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onIdSubmit(idRef.current.value)
  }

  function createNewId() {
    onIdSubmit(uuidV4())
  }

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form className="w-9/12" onSubmit={handleSubmit}>
        <ul className="w-full flex justify-center">
          <p className="mb-2 w-full flex flex-col">
            <label htmlFor="ID">Enter your ID</label>
            <input className="p-2 border-2 border-gray-300 rounded" type="text" ref={idRef} required/>
          </p>
        </ul>
        <button className="mr-2 bg-blue-500 text-white p-2 rounded" type="submit">Login</button>
        <button onClick={createNewId} className="bg-green-500 text-white p-2 rounded">Create a new ID</button>
      </form>
    </div>
  );
}