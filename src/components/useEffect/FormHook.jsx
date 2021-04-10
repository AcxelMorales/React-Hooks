import React, { useEffect } from "react";

import { useForm } from "../../hooks/useForm";

import "./effects.css";

export const FormHook = () => {
  const [values, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = values;

  useEffect(() => {
    console.log("Change Email");
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormHook</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group mt-3">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Tu email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group mt-3">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="********"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <div className="d-grid gap-2">
        <button
          type="submit"
          className="btn btn-block btn-outline-success mt-3"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};
