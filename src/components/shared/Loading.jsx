import React from "react";

export const Loading = () => {
  return (
    <div className="alert alert-info text-center animate__animated animate__fadeIn">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="d-block mt-3">Loading data...</span>
    </div>
  );
};
