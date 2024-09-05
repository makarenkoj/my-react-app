import {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState('Guest'),
          [age, setAge] = useState(0),
          [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
            setName('Spangebob');
          },
          incrementAge = () => {
            setAge(age + 1);
          },
          togleEmploedStatus = () => {
            setIsEmployed(!isEmployed);
          };

    return( <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>increment Age</button>

                <p>Is Employed: {isEmployed ? 'Yes' : 'No'}</p>
                <button onClick={togleEmploedStatus}>Togle Status</button>
            </div>)

}

export default MyComponent
