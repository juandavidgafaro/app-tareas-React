import {CompleteIcon} from './CompleteIcon';
import {DeleteIcon} from './DeleteIcon';
import '../styles/ToDoItem.css';

function ToDoItem(props){
    return(
      <li className="ToDoItem">

        <CompleteIcon 
          completed={props.completed}
          onComplete={props.onComplete}
        />


        {/* <span className={
          `Icon Icon-check ${props.completed && "Icon-check--active"}`
        }
        onClick={props.onComplete}
        >
          V
        </span> */}
        <p className={`ToDoItem-p ${props.completed && "ToDoItem-p--complete"}`}>
        {props.text}
        </p>

        <DeleteIcon 
          onDelete={props.onDelete}
        />

        {/* <span 
          className="Icon Icon-delete "
          onClick={props.onDelete}
        >
          X
        </span> */}
      </li>
    );
}

export {ToDoItem}