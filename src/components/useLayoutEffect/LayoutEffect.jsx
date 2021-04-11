import React, { useLayoutEffect, useRef, useState } from "react";

import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import "./layout.css";

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote } = !!data && data[0];

  const [boxSize, setBoxSize] = useState({});

  const tag = useRef();

  useLayoutEffect(() => {
    setBoxSize(tag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>LayoutEffect ⚛️</h1>
      <hr />
      <figure className="text-end animate__animated animate__fadeIn">
        <blockquote className="blockquote">
          <p ref={tag}>{quote}</p>
        </blockquote>
      </figure>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <div className="d-grid gap-2 mt-5 mx-auto col-10">
        <button
          className="btn btn-primary w-100"
          type="button"
          onClick={increment}
        >
          Next quote
        </button>
      </div>
    </>
  );
};
