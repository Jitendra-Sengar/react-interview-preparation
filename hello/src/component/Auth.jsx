import React from "react";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthentication = () => {
    if (isRegistered) {
        const user=users.find((u)=>u.email===email && u.password === password)
        if(user){
            setIsLoggedIn(true)
        }
        else{
            alert('Login failed.Please check your credential')
        }
    } else {
      //register
      const newUser = { email, password };
      setUsers([...users, newUser]);
      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Authentication</h1>
      {isLoggedIn ? (
        <div>
            <h2>Welcome {email}!</h2>
            <button onClick={handleLogout} >Logout</button>
        </div>
      ) : (
        <div>
          <form>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleAuthentication}>
              {isRegistered ? "Login" : "Register"}
            </button>
          </form>
          <p>
            {isRegistered
              ? "Dont have an account register now"
              : "Already have an account log in"}
          </p>
          <button onClick={() => setIsRegistered(!isRegistered)}>
            {isRegistered ? "Register" : "Log in"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Auth;
