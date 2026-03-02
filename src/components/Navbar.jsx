import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: 12, padding: 12, borderBottom: "1px solid #ddd" }}>
      <Link to="/">Home</Link>
      <Link to="/users">Userss</Link>
    </nav>
  );
}