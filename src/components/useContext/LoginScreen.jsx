import React, { useContext } from "react";

import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser({
      id: 1234,
      name: "Acxel",
      email: "acxelmorales97@gmail.com"
    });
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <hr />

      <div className="d-grid gap-2 mt-5 mx-auto col-10">
        <button
          className="btn btn-outline-primary"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};
