import React from "react";

import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

import { Loading } from "../shared/Loading";

import "../useEffect/effects.css";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes 😎⚠</h1>
      <hr />

      {loading ? (
        <Loading />
      ) : (
        <figure className="text-end animate__animated animate__fadeIn">
          <blockquote className="blockquote">
            <p>{quote}</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Someone famous in <cite title="Source Title">{author}</cite>
          </figcaption>
        </figure>
      )}

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
