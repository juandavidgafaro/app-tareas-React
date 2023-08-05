import { ReactComponent as CheckSVG } from "../../Buttons/Check.svg";
import { ReactComponent as DeleteSVG } from "../../Buttons/Delete.svg";
import "../../styles/ToDoIcon.css"


const iconTypes = {
    "check": (color) => <CheckSVG  className="Icon-svg" fill={color}/>,
    "delete": (color) =>  <DeleteSVG  className="Icon-svg" fill={color}/>
};

function ToDoIcon({ type, color, onClick }){
    return(
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export {ToDoIcon};