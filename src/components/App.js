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
  {text: "correr ", completed: false},
  {text: "Nadar", completed: true},
]
/* Tener esto <> </> es lo mismo que tener <React.Fragment> </React.Fragment> */

function App() {

  const [ToDos, setToDos] = React.useState(defaultToDos);

  const [searchValue, setSearchValue] = React.useState('');
  console.log('Los usuario buscan: '+ searchValue);

  const completedTodos = ToDos.filter(todo => todo.completed).length;
  const totalTodos = ToDos.length;

  return (
    <> 

      <ToDoCounter 
        completed={completedTodos} 
        total={totalTodos} 
      />

      <ToDoSearch 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
      />

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

    </>
  );
}

export default App;
