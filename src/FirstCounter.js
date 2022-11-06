import React, {usestate} from "react"
import UseCounter from './UseCounter'
 function FirstCounter(){
  const [count, increment, decrement, reset] = UseCounter()
  
  
 return (
   <div>
   <h2>count = {count}</h2>
   <button onClick={increment}>increment</button>
   <button onClick={decrement}>decrement
</button>

<button className='btn'onClick={reset}>reset</button>
<button onClick={reset}>reset</button>
   </div>

 )
 }
 export default FirstCounter;