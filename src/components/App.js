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

  const completedTodos = ToDos.filter(todo => !!todo.completed).length;
  const totalTodos = ToDos.length;

  const searchedToDos = ToDos.filter(todo =>{

    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return todoText.includes(searchText);
  });

  const completeToDo = (text) => {

    const newToDos = [...ToDos];  // Los ... se usan para copiar un array.
    const TodoIndex = newToDos.findIndex(
      (todo) => todo.text == text
    );
    newToDos[TodoIndex].completed = true;
    setToDos(newToDos);
  };

  const deleteToDo = (text) => {

    const newToDos = [...ToDos];  // Los ... se usan para copiar un array.
    const TodoIndex = newToDos.findIndex(
      (todo) => todo.text == text
    );
    newToDos.splice(TodoIndex, 1);
    setToDos(newToDos);
  };

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
        {searchedToDos.map(todo =>(
          <ToDoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeToDo(todo.text)}
            onDelete = {() =>  deleteToDo(todo.text)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />

    </>
  );
}

export default App;
