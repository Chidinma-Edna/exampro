import React, {useState} from "react";
import UseCounter from "UseCounter";
function SecondCounter () {
  const [count, increment, decrement, reset] = UseCounter()

  return (
    <div>
    <h2>count = {count}</h2>
    <button onClick={increment}>increment</button>
    <button onClick={decrement}></button>
    <button onClick={reset}>reset</button>
    </div>
  )
}
export default SecondCounter;