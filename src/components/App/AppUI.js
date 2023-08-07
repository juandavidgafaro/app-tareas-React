import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton'
import { TodosLoading } from '../TodosLoading';
import { TodosErrors } from '../TodosErrors';
import { EmpityTodos } from '../EmpityTodos';

let id = 1;

function AppUI({
  loading,
  error,
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  searchedToDos,
  completeToDo,
  deleteToDo }) {
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
        {loading && (<>
          {[...Array(4)].map((_, Id) => (
            <TodosLoading key={Id} />
          ))}
        </>)}
        {error && <TodosErrors />}
        {(!loading && searchedToDos.length == 0) && <EmpityTodos />}

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

      <CreateToDoButton />

    </>
  );
}

export { AppUI };
