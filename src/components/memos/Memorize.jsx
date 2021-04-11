import React, { useState } from "react";

import "../useEffect/effects.css";

import { Small } from "./Small";

import { useCounter } from "../../hooks/useCounter";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />{" "}
      </h1>
      <hr />

      <div className="d-grid gap-2 mt-5 mx-auto col-10">
        <button className="btn btn-primary" type="button" onClick={increment}>
          +1
        </button>

        <button
          className="mt-3 btn btn-success"
          type="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          Show / Hide {JSON.stringify(show)}
        </button>
      </div>
    </>
  );
};
