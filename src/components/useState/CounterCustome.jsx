import React from "react";

import { useCounter } from "../../hooks/useCounter";

import "./Counter.css";

export const CounterCustome = () => {
  const { state: counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <div className="text-center">
        <button className="btn btn-success" onClick={() => increment(2)}>
          +1
        </button>
        <button className="btn btn-primary" onClick={reset}>
          Reset
        </button>
        <button className="btn btn-danger" onClick={() => decrement(3)}>
          -1
        </button>
      </div>
    </>
  );
};
