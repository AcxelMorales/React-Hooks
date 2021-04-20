import React, { useContext } from "react";

import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser({
      id: 1234,
      name: "Acxel",
      email: "acxelmorales97@gmail.com"
    });
  };

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <div className="d-grid gap-2 mt-5 mx-auto col-10">
        <button
          className="btn btn-outline-primary"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </>
  );
};
