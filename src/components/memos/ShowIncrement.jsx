import React, { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("Render");

  return (
    <div className="d-grid gap-2 mt-5 mx-auto col-10">
      <button
        className="btn- btn-primary"
        onClick={() => {
          increment(5);
        }}
      >
        Increment +
      </button>
    </div>
  );
});
