import './ToDoCounter.css';

function ToDoCounter({completed, total}){
    return(
      <h1>
        Has completado {completed} de {total} TODOS
      </h1>
    );
}

export {ToDoCounter}