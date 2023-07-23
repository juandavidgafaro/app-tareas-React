import '../styles/ToDoItem.css';

function ToDoItem(props){
    return(
      <li className="ToDoItem">
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}>V</span>
        <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}>
        {props.text}
        </p>
        <span className="Icon Icon-delet">X</span>
      </li>
    );
}

export {ToDoItem}