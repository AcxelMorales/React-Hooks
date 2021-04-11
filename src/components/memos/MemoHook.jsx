import React, { useMemo, useState } from "react";

import "../useEffect/effects.css";

import { useCounter } from "../../hooks/useCounter";

export const MemoHook = () => {
  const { counter, increment } = useCounter(2000);
  const [show, setShow] = useState(true);

  const heavyProcess = (increment) => {
    for (let i = 0; i < increment; i++) {
      console.log("Ahi vamos...");
    }

    return `${increment} iteraciones realizadas`;
  };

  const memoProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />

      <p>{memoProcess}</p>

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
