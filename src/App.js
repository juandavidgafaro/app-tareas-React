import { ToDoCounter } from './ToDoCounter';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import { ToDoItem } from './ToDoItem';
import './App.css';

function App() {
  return (
    <div className="App">

      <ToDoCounter />

      <ToDoSearch />

      <ToDoList>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ToDoList>

      {/* <CreateToDoItem /> */}

    </div>
  );
}

export default App;
