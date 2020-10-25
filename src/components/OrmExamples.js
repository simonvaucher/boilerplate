import React, { useState, useEffect } from "react";

function generateDummyUser() {
  return {
    name: Math.random().toString(36).substring(2, 15),
  };
}

const OrmExamples = () => {
  const [responseError, setErrors] = useState(false);
  const [users, setUsers] = useState();

  function createUser() {
    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(generateDummyUser()),
    })
      .then(result => {
        if (!result.ok) throw result;
        return result.json();
      })
      .then(() => {
        fetchUsers();
      });
  }

  function fetchUsers() {
    fetch("/api/users")
      .then(result => {
        if (!result.ok) throw result;
        return result.json();
      })
      .then(result => {
        setUsers(result);
      });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <button onClick={() => createUser()}>Create user</button>
      <br />
      <button onClick={() => fetchUsers()}>Fetch users</button>
      <h4>Users</h4>
      <ul>
        {users &&
          users.map((user, key) => (
            <li key={key}>
              ID: {user.id} | Name: {user.name}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default OrmExamples;
