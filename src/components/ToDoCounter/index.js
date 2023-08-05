import '../../styles/ToDoCounter.css';

function ToDoCounter({completed, total}){
    return(
      <h1 className='ToDoCounter'>
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
      </h1>
    );
}

export {ToDoCounter}