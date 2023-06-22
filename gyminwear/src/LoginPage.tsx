import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate
    
  };

  return (
    <div>
      <h2>Login Page</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password}/>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
