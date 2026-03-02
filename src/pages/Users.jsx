import React from "react";
import { Link } from "react-router-dom";

export const USERS = [
  { id: 1, name: "Alice Johnson", age: 24, bio: "Frontend dev. Loves React and coffee." },
  { id: 2, name: "Bob Smith", age: 31, bio: "Backend guy. API wizard." },
  { id: 3, name: "Charlie Brown", age: 27, bio: "Designer turned developer." },
  { id: 4, name: "Diana Prince", age: 29, bio: "Fullstack hero. JavaScript enthusiast." },
  { id: 5, name: "Ethan Hunt", age: 35, bio: "Security expert. Loves puzzles." },
  { id: 6, name: "Fiona Gallagher", age: 22, bio: "Junior dev. Always learning." },
  { id: 7, name: "Diana Princeeeee", age: 29, bio: "Fullstack hero. JavaScript enthusiast." }
];
``
export default function Users() {
  return (  
    <div style={{ padding: 12 }}>
      <h1>Users</h1>

      <ul>
        {USERS.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}