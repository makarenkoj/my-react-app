import { useState } from "react";

function AddObject(){

    const [cars, setCars] = useState([]),
          [carYear, setCarYear] = useState(new Date().getFullYear()),
          [carMake, setCarMake] = useState(''),
          [carModel, setCarModel] = useState('');

    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel};
        setCars(c => [...c, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake('');
        setCarModel('');
    };

    function handleRemoveCar(i){
      // setCars(cars.filter((_, index) => index !== i) );
      setCars(c => c.filter((_, index) => index !== i) );
    };

    function handleYearChange(event){
        setCarYear(event.target.value);
    };

    function handleMakeChange(event){
      setCarMake(event.target.value);
    };

    function handleModelChange(event){
      setCarModel(event.target.value);
    };

    return( <div>
                <h2>List of Car Objects</h2>
                <ul>
                    {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>
                                                  {car.year} {car.make} {car.model}
                                              </li>)}

                </ul>

                <input type='number' value={carYear} onChange={handleYearChange} placeholder="Enter car Year"/><br/>
                <input type='string' value={carMake} onChange={handleMakeChange} placeholder="Enter car Make"/><br/>
                <input type='string' value={carModel} onChange={handleModelChange} placeholder="Enter car Model"/><br/>
                <button onClick={handleAddCar}>Add Car</button>
            </div>

    );

}

export default AddObject
