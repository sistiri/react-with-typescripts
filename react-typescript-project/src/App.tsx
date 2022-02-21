import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
// import './App.css';

function App() {
const [todos, setTodos] = useState<Todo[]>([])

  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn TypeScript')
  // ]

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
  }

  const removeTodoHandler = (id: string) => {
      setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
     <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
