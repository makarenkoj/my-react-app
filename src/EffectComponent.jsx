import { useState, useEffect } from "react";

function EffectComponent(){
    const [count, setCount] = useState(0),
          [color, setColor] = useState('green'),
          [width, setWidth] = useState(window.innerWidth),
          [height, setHeight] = useState(window.innerHeight);

    // useEffect(() => {
    //   document.title = `Count: ${count}`;
    // });
    // same
    useEffect(() => {
      document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('EVENT LISTENER ADDED');

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log('EVENT LISTENER REMOVED');
        }
    },[]);

    function addCount(){
        setCount(c => c + 1);
    };

    function subtracktCount(){
      setCount(c => c - 1);
    };

    function changeColor(){
      setColor(c => c === 'green' ? 'red' : 'green');
    };

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    return(<>
              <p>Window Width: {width}</p>
              <p>Window Height: {height}</p>

              <p style={{color: color}}>
                Count: {count}
              </p>
              <button onClick={addCount}>Add</button>
              <button onClick={subtracktCount}>Subtrackt</button>
              <button onClick={changeColor}>Change Color</button>
          </>);

}

export default EffectComponent
