import { useParams, Link } from "react-router-dom";
import { USERS } from "./Users.jsx";

export default function UserProfile() {
  const { userId } = useParams();
  const idNum = Number(userId);

  const user = USERS.find((u) => u.id === idNum);

  if (!user) {
    return (
      <div style={{ padding: 12 }}>
        <h1>User not found</h1>
        <p>No user with id: {userId}</p>
        <Link to="/users">Back to Users</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 12 }}>
      <h1>User Profile</h1>

      <h2>{user.name}</h2>
      <p><b>ID:</b> {user.id}</p>
      <p><b>Age:</b> {user.age}</p>
      <p><b>Bio:</b> {user.bio}</p>

      <br />
      <Link to="/users">← Back to Users</Link>
    </div>
  );
}