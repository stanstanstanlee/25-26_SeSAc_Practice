import React from "react";
import { Outlet } from "react-router-dom";

export default function DummyLayout() {
  return (
    <div>
      <div></div>
      <Outlet />
    </div>
  );
}
