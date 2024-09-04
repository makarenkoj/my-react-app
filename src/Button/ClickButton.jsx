// import styles from './Button.module.css'

function ClickButton(){
    // let count = 0;

    // const handleClick = () => console.log('OUCH!');
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    // const handleClick3 = (name) => {
    //   if(count < 3){
    //     count++;
    //     console.log(`${name} you clicked me ${count} time/s`);
    //    }
    //    else{
    //         console.log(`${name} stop clicking me!`);
    //    }
    //   };
    const handleClick4 = (e) => e.target.textContent = 'OUCH! 😤';


    return(
        // <button onClick={handleClick}>Click me 😸</button>
        // <button onClick={() => handleClick2("Yura")}>Click me 😸</button>
        // <button onClick={() => handleClick3("Yura")}>Click me 😸</button>
        // <button onClick={(e) => handleClick4(e)}>Click me 😸</button>
        <button onDoubleClick={(e) => handleClick4(e)}>Click me 😸</button>
    );
}

export default ClickButton
