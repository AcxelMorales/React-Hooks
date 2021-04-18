import React, { useContext } from "react";

import { UserContext } from "./UserContext";

export const HomeScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>HomePage</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    </div>
  );
};
