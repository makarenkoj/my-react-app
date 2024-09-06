import { useState } from "react";

function UpdateArray(){
    const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana']);

    function handleAddFood(){
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = '';

        setFoods(f => [...f, newFood]);
    };

    function handleRemoveFood(i){
        setFoods(foods.filter((_, index) => index !== i));
    };

    return(<div>
                <h2>List of Food</h2>
                <ul>
                    {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>
                                                    {food}  
                                                </li>)}
                </ul>
                <input type='text' id='foodInput' placeholder="Enter food name"/>
                <button onClick={handleAddFood}>Add Food</button>
    </div>);
}

export default UpdateArray
