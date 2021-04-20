import React, { useContext } from "react";

import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>AboutPage</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
    </>
  );
};
