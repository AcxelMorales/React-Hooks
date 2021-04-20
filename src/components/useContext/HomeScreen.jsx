import React, { useContext } from "react";

import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser({});
  };

  return (
    <>
      <h1>HomePage</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <div className="d-grid gap-2 mt-5 mx-auto col-10">
        <button
          className="btn btn-outline-primary"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </>
  );
};
