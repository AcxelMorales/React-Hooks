import React, { useRef } from "react";

import "../useEffect/effects.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = e => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Nombre"
      />

      <div className="d-grid gap-2 mt-5 mx-auto col-10">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleClick}
        >
          Focus
        </button>
      </div>
    </div>
  );
};
