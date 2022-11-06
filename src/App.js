import React from "react";
import UseCounter from "./UseCounter";
import FirstCounter from "./FirstCounter"
import UseReducer from  "./Components/UseReducer";
import ErrorBoundary from './Components/ErrorBoundary';
import  "style.css";

function App() {
  return (
    <div>
      <FirstCounter />
      <UseReducer />
      <ErrorBoundary />
    </div>

  );
}
export default  App;