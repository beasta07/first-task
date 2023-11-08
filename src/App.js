import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Your login info is submitted');
  };

  return (
    <div className="App">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className='form-group'>
          <label>Email: </label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className='form-group'>
          <label>Password: </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className='form-group'>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
