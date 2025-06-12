import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <main>
      <h2>Usuários do Sistema</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </main>
  );
}

export default Dashboard;