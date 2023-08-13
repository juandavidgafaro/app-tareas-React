import React from 'react';
import '../../styles/ToDoCounter.css';
import { TodoContext } from '../TodoContex';


function ToDoCounter(){

  const{
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);

    return(
      <h1 className='ToDoCounter'>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
      </h1>
    );
}

export {ToDoCounter}