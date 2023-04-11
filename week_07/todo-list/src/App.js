import { useState } from 'react';
import './App.css';


function App() {

const [toDoList, setToDoList] = useState([
  {name: "Buy Shopping", priority: 'high'},
  {name: "Clean House", priority: 'high'},
  {name: "Wash Car", priority: 'low'},
])

const [newTask, setNewTask] = useState('')

const [newTaskPri, setNewTaskPri] = useState('high' )

const taskNodes = toDoList.map(task => {
    return <span>
      <li className={task.priority==='high' ? "high" : "low"}>{task.name}</li>
    </span>  
  }
)

const handleChange = (event) => {
  setNewTask(event.target.value)
}

const handleRadioChange = (event) => {
  setNewTaskPri(event.target.value)
}

const handleSubmit = (event) => {
  event.preventDefault();
  const newList = [...toDoList, {name: newTask, priority: newTaskPri}]
  // newList.push({
  //   name: newTask,
  //   priority: newTaskPri,
  // })
  setToDoList(newList)
  setNewTask('')
  setNewTaskPri('high')
}

  return (
    <>
       <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-task">Add a new task </label>
        <input type="text" id="new-task" onChange={handleChange} value={newTask}/>

        <input type="radio" name="Priority" onChange={handleRadioChange} value="low"/>
        <label htmlFor="priority-high">Priority Low</label>
        
        <input type="radio" name="Priority" onChange={handleRadioChange} value="high"/>
        <label htmlFor="priority-low">Priority High</label>
       <button>Add Task</button>
      </form>
      <ul>
        {taskNodes}
      </ul>
    </>
  );
}

export default App;
