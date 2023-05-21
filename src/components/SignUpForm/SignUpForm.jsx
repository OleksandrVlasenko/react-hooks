import React, { useEffect, useState } from 'react';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export function SignUpForm() {
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage('password', '');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  // useEffect(() => {
  //   const email = JSON.parse(localStorage.getItem('email'));
  //   console.log("useEffect  email:", email)
  //   if (email) {
  //   setEmail(email);      
  //   }
  // }, [])

  // useEffect(() => {
  // localStorage.setItem('email', JSON.stringify(email));
  // }, [email])
  
  // useEffect(() => {
  //   localStorage.setItem('password', JSON.stringify(password));
  // }, [password]);

  return (
    <form autoComplete="off">
      <label htmlFor="email">
        <span>Email</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>
      <br />
      <label htmlFor="password">
        <span>Password</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}
