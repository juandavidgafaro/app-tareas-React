import {ToDoCounter} from "../ToDoCounter";
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton'

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedToDos,
  completeToDo,
  deleteToDo})
{
  return(
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

export { AppUI };
