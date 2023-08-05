import {ToDoIcon} from ".";

function CompleteIcon({completed, onComplete}){
    return (
        <ToDoIcon 
            type="check"
            color={completed ? 'green': 'gray'}
            onClick={onComplete}
        />
    );
}

export {CompleteIcon}