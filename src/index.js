import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";

// import { HookApp } from "./HookApp.jsx";
// import { Counter } from "./components/useState/Counter";
// import { CounterCustome } from "./components/useState/CounterCustome";
// import { SimpleForm } from "./components/useEffect/SimpleForm";
// import { FormHook } from "./components/useEffect/FormHook";
// import { MultipleCustomHooks } from "./components/examples/MultipleCustomHooks";
// import { FocusScreen } from "./components/useRef/FocusScreen";
import { RealExampleRef } from "./components/useRef/RealExampleRef";

ReactDOM.render(
  <React.StrictMode>
    {/* <Counter /> */}
    <RealExampleRef />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
