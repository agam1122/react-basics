import { useState } from "react";

function Counter(){
    const [counter, setCounter] = useState(0);
    const counterInc=() => {
        setCounter(counter+1)
    }
    const [display, setDisplay] = useState(true)
    return(
        <div>
            {
                display? <h1>Counter: {counter}</h1>: <h1>Counter: </h1>
            }
            
            <button onClick={counterInc}>Increment</button>
            <button onClick={() => setDisplay(!display)}>Toggle Counter</button>
        </div>
    )
}

export default Counter;
