import React from 'react';
import { useLocalStorage } from './useLocalSto'

const TodoContext = React.createContext();


function TodoProvider({ children }){

    const keyTodosLc = "ToDos_V1";

    const {
        item: ToDos, 
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage(keyTodosLc)
    const [searchValue, setSearchValue] = React.useState('');

    //const amountTrue = ToDos.filter(todo => todo.completed === true).length;

    console.log('Los usuario buscan: '+ searchValue);

    const completedTodos = ToDos.filter(todo => !!todo.completed).length;
    const totalTodos = ToDos.length;

    React.useEffect(() => {
        console.log('Loooog 2');
    },[totalTodos]);  // tambien se le pueden adicional mas parametros [totalTodos, amountTrue]

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


    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDo,
            deleteToDo 
        }}>
            {
               children 
            }

        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };