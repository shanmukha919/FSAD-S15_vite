import { useEffect, useState } from "react";
import axios from "axios";

function FetchUsers() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError(true);
          return;
        }

        const response = await axios.get("http://localhost:7070/user/userinfo", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(response.data);
      } catch (err) {
        setError(true);
      }
    };

    fetchUser();
  }, []);

  if (error || !user) {
    return (
      <div>
        <h1>Unauthorized User to fetch. Please Login...</h1>
      </div>
    );
  }

  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default FetchUsers;
