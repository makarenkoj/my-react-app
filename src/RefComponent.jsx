import { useState, useEffect, useRef } from "react";

function RefComponent(){
    // let [nuber, setNumber] = useState(0);
    
    // const ref = useRef(0);
    const inputRef1 = useRef(null),
          inputRef2 = useRef(null),
          inputRef3 = useRef(null);

    // console.log(ref);

    useEffect(() => {
      console.log('COMPONENT RENDER')
      console.log(inputRef1);
    })

    function handleClick1(){
        // setNumber(n => n + 1);
        // ref.current++;
        // console.log(ref.current);
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = 'red';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
    };

    function handleClick2(){
      inputRef2.current.focus();
      inputRef1.current.style.backgroundColor = '';
      inputRef2.current.style.backgroundColor = 'yellow';
      inputRef3.current.style.backgroundColor = '';
    };

    function handleClick3(){
        inputRef3.current.focus();
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = 'green';
    };

    return(<div>
              <button onClick={handleClick1}>
                  Click me 1!
              </button>
              <input ref={inputRef1}/>

              <button onClick={handleClick2}>
                  Click me 2!
              </button>
              <input ref={inputRef2}/>

              <button onClick={handleClick3}>
                  Click me 3!
              </button>
              <input ref={inputRef3}/>
          </div>
    );
};

export default RefComponent;
