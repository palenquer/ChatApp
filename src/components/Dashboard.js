import React from "react";
import Sidebar from "./Sidebar";

export default function Dashboard({ id }) {
  return (
    <div className="flex h-screen">
      <Sidebar id={id} />
    </div>
  );
}
