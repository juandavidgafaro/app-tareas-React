import {ToDoCounter} from "./ToDoCounter";
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import { CreateToDoButton } from './CreateToDoButton';
import React from "react";

const defaultToDos = [
  {text: "Hacer comida", completed: true},
  {text: "Ir al gimnasio", completed: false},
  {text: "dormir ", completed: false},
  {text: "correr ", completed: false}
]


function App() {
  return (
    <React.Fragment>

      <ToDoCounter completed={2} total={10} />

      <ToDoSearch />

      <ToDoList>
        {defaultToDos.map(todo =>(
          <ToDoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />

    </React.Fragment>
  );
}

export default App;
