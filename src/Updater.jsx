import { useState } from "react";

function Updater(){

    const [count, setCount] = useState(0);

    function increment(){
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    };

    function decrement(){
      setCount(c => c - 1);
      setCount(c => c - 1);
      setCount(c => c - 1);
    };

    function reset(){
      setCount(0);
    };

    return( <div className='counter-container'>
                <p className='count-display'>{count}</p>
                <button className='counter-button' onClick={decrement}>Decrement</button>
                <button className='counter-button' onClick={reset}>Reset</button>
                <button className='counter-button' onClick={increment}>Increment</button>
            </div> );
}

export default Updater
