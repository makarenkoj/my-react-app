import {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0),
          increment = () => {
              setCount(count + 1);
          },
          decrement = () => {
              setCount(count - 1);
          },
          reset = () => {
              setCount(0);
          };

    return( <div className='counter-container'>
                <p className='count-display'>{count}</p>
                <button className='counter-button' onClick={decrement}>Decrement</button>
                <button className='counter-button' onClick={reset}>Reset</button>
                <button className='counter-button' onClick={increment}>Increment</button>
            </div> );
}

export default Counter
