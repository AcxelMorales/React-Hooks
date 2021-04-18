import React from "react";

import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAdd }) => {
  const [{ desc }, handleInputChange, reset] = useForm({
    desc: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (desc.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc,
      done: false,
    };

    handleAdd(newTodo);

    reset();
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="desc"
          placeholder="Aprender..."
          autoComplete="off"
          onChange={handleInputChange}
          value={desc}
        />
        <div className="d-grid gap-2 mt-5">
          <button className="btn btn-outline-primary" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};
