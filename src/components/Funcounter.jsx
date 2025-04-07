import React, { useState } from 'react'
import Button from '@mui/material/Button';

export const Funcounter = () => {
    const [count,setcount]=useState(0)
    function increment(){
        setcount(
            count+1
        )
    }
    function decrement(){
        setcount(
            count-1
        )
    }
    function reset(){
        setcount(0)
    }
    
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=> increment()}>Increment</button>
        <button onClick={()=> decrement()}>decrement</button>
        <button onClick={()=> reset()}>reset</button>

        {/*<Button variant="contained">Contained</Button>*/}

    </div>
  )
}
export default Funcounter