import React from 'react';
import '../../styles/ToDoSearch.css';

function ToDoSearch({searchValue, setSearchValue}){

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