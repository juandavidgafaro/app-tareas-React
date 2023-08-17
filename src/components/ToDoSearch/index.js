import React from 'react';
import '../../styles/ToDoSearch.css';
import { TodoContext } from '../TodoContex';

function ToDoSearch(){
  
  const{
    searchValue, 
    setSearchValue
  } = React.useContext(TodoContext);

    return(
      <input 
        className="ToDoSearch"
        placeholder="Cortar cebolla"
        value={searchValue}
        onChange={(event) =>{
          setSearchValue(event.target.value);
        }}>
      </input>
    );
}

export {ToDoSearch}