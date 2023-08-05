import {AppUI} from './AppUI'
import { useLocalStorage } from './useLocalSto'
import React from "react";

/*
const defaultToDos = [
  {text: "Hacer comida", completed: true},
  {text: "Ir al gimnasio", completed: false},
  {text: "dormir ", completed: false},
  {text: "correr ", completed: false},
  {text: "Nadar", completed: true},
]
*/
/* Tener esto <> </> es lo mismo que tener <React.Fragment> </React.Fragment> */

//localStorage.setItem("ToDos_V1", JSON.stringify(defaultToDos));
//localStorage.removeItem('ToDos_V1'); // Para borrar los datos que tenemos en guardados.
//JSON.stringify(defaultToDos);

function App() {

  const keyTodosLc = "ToDos_V1";

  const [ToDos, saveTodos] = useLocalStorage(keyTodosLc)
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
      (todo) => todo.text === text
    );
    newToDos[TodoIndex].completed = true;
    saveTodos(newToDos);
  };

  const deleteToDo = (text) => {

    const newToDos = [...ToDos];  // Los ... se usan para copiar un array.
    const TodoIndex = newToDos.findIndex(
      (todo) => todo.text === text
    );
    newToDos.splice(TodoIndex, 1);
    saveTodos(newToDos);
  };

  return (
    <AppUI 
      completedTodos = {completedTodos}
      totalTodos = {totalTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedToDos = {searchedToDos}
      completeToDo = {completeToDo}
      deleteToDo = {deleteToDo}
    />
  );
}

export default App;
