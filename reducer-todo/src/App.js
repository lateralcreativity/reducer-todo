import './App.css';
import {useReducer, useState} from 'react';
import { initialState, reducer } from './reducers/reducer';
import ToDoList from './components/ToDoList';

function App() {
  const [newTask, setNewTask] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputHandler = event => {
    setNewTask(event.target.value);
  }

  const submitHandler = event => {
    event.preventDefault();
    dispatch({
      type: "UPDATE_ITEM",
      payload: newTask
    });
    setNewTask('');
  }

  const completedHandler = (task, event) => {
    if (!task.completed) {
      event.target.style.textDecoration = 'line-through';
    } else {
      event.target.style.textDecoration = 'none';
    }
    const data = { ...task };
    dispatch({
      type: "UPDATE_COMPLETED",
      payload: data
    });
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={inputHandler} value={newTask} />
        <button>Submit</button>
      </form>
      <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>Clear</button>
      <ToDoList data={state.toDoList} completedHandler={completedHandler} />
    </div>
  )
}

export default App;
