import './App.css';//This imports the App.css stylesheet and the useState hook from the react library.
import React, { useState } from "react";

function TodoList() { //This declares a function component called TodoList.
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [uncompletedCount, setUncompletedCount] = useState(0);

  const handleAddTask = () => { //This declares a function called handleAddTask.
    if (inputValue !== "") { //This checks if inputValue is not an empty string.
      setTasks([...tasks, { text: inputValue, completed: false }]);
      setInputValue("");
      setUncompletedCount(uncompletedCount + 1);
    }
  };

  const handleDeleteTask = (index) => { //This declares a function called handleDeleteTask. that takes an index parameter 
    const newTasks = [...tasks];
    if (!newTasks[index].completed) {
      setUncompletedCount(uncompletedCount - 1);
    }
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleCompleteTask = (index) => {//This declares a function called handleCompleteTask that takes an index parameter.
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
    setUncompletedCount(uncompletedCount - 1);
  };

  return (//This starts the return statement, which specifies what the component should render.
    <div className='ToDoList-container'>
      <div className='ToDoList'>
        <h1>Pending tasks - {uncompletedCount}</h1>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>
        <ul> 
          {tasks.map((task, index) => (
            <li key={index}>
              {task.completed ? (
                <del>{task.text}</del>
              ) : (
                <span>{task.text}</span>
              )}
              <button onClick={() => handleCompleteTask(index)}>
                Complete
              </button>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TodoList;