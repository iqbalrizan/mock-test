import React, { useState } from 'react';
import "./App.css"

function LoginForm() {
  const [pin, setPin] = useState('');

  const handleChange = (event) => {
    setPin(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validasi PIN dengan 4 angka
    if (pin.length !== 4) {
      alert('PIN harus 4 angka');
      return;
    }
    setTimeout(() => {
      window.location.href = '/todo-list';
    }, 1000);
  };

  return (
    <div className="loginhead">
       <h2>LOGIN</h2>
      <p>Masukan 4 digit angka</p>
    
    <div className="login">
     
    <form onSubmit={handleSubmit}>
      <label>
        PIN:
        <input type="password" maxLength="4" value={pin} onChange={handleChange} />
      </label>
      <button type="submit">Login</button>
    </form>
    </div>
    </div>
  );
}

export default LoginForm;
