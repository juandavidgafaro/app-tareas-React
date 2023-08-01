import '../styles/ToDoItem.css';

function ToDoItem(props){
    return(
      <li className="ToDoItem">
        <span className={
          `Icon Icon-check ${props.completed && "Icon-check--active"}`
        }
        onClick={props.onComplete}
        >
          V
        </span>
        <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}>
        {props.text}
        </p>
        <span 
          className="Icon Icon-delet"
          onClick={props.onDelete}
        >
          X
        </span>
      </li>
    );
}

export {ToDoItem}