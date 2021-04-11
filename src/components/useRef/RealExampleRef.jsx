import React, { useState } from "react";

import { MultipleCustomHooks } from "../examples/MultipleCustomHooks";

import "../useEffect/effects.css";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1 className="mb-3">RealExampleRef</h1>

      {show && <MultipleCustomHooks />}

      <div className="d-grid gap-2 mt-5 mx-auto col-10">
        <button
          className="btn btn-secondary w-100"
          type="button"
          onClick={() => {
            setShow(!show);
          }}
        >
          Show / Hide
        </button>
      </div>
    </>
  );
};
