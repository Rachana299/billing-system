import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded credentials
    if (username === 'admin' && password === 'password') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div class="login-container">
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
