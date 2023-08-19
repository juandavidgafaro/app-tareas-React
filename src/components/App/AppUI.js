import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton'
import { TodosLoading } from '../TodosLoading';
import { TodosErrors } from '../TodosErrors';
import { EmpityTodos } from '../EmpityTodos';
import { TodoContext } from "../TodoContex";
import React from "react";
import { Modal } from "../Modal";


function AppUI() {

  const {
    loading,
    error,
    searchedToDos,
    completeToDo,
    deleteToDo,
    openModal,
    setOpenModal

  } = React.useContext(TodoContext);

  return (
    
    <>

      <ToDoCounter />
      <ToDoSearch />

      <ToDoList>
      {loading && (<>
        {[...Array(4)].map((_, Id) => (
          <TodosLoading key={Id} />
        ))}
      </>)}
      {error && <TodosErrors />}
      {(!loading && searchedToDos.length === 0) && <EmpityTodos />}

      {searchedToDos.map(todo => (
        <ToDoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeToDo(todo.text)}
          onDelete={() => deleteToDo(todo.text)}
        />
      ))}
    </ToDoList>
      
    <CreateToDoButton 
      setOpenModal={setOpenModal}
    />

    {openModal && (
      <Modal>
        La funcionalidad de agregar todos
      </Modal>
    )}
    
    </>
  );
}

export { AppUI };
