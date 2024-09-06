import { useState } from "react";

function ToDoList(){
    const [tasks, setTasks] = useState(['Eat Breackfast', 'Tacke a Shower', 'Walk the Dog']),
          [newTask, setNewTask] = useState('');

    function handleInputChange(event){
        setNewTask(event.target.value);

    };

    function addTask(){
        if(newTask.trim() !== ''){
            setTasks(t => [...t, newTask]);
          setNewTask('');
        };
    };

    function deleteTask(i){
        const updatedTasks = tasks.filter((_, index) => index !== i);
        setTasks(updatedTasks);
    };

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        };
    };

    function moveTaskDown(index){
        if(index < tasks.length - 1){
          const updatedTasks = [...tasks];
          [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
          setTasks(updatedTasks);
        };
    };

    return( <div className="to-do-body">
                <div className='to-do-list'>
                  <h1>To-Do-List</h1>
                  <div>
                    <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
                      <button className="add-button" onClick={addTask}>
                          Add
                      </button>
                  </div>
                  <ol>
                    {tasks.map((task, index) => <li key={index}>
                                                    <span className="text">{task}</span>
                                                    <button className="delete-button" onClick={() => deleteTask(index)}>
                                                        Delete 🖕
                                                    </button>
                                                    <button className="moove-button" onClick={() => moveTaskUp(index)}>
                                                        👆
                                                    </button>
                                                    <button className="moove-button" onClick={() => moveTaskDown(index)}>
                                                        👇
                                                    </button>
                                                </li>)}
                  </ol>
                </div>
            </div>);

}

export default ToDoList
