import '../../styles/Button.css';

function CreateToDoButton(){
    return(
      <button className="CreateButton" 
      onClick={(event) => {
        console.log("Hiciste Click en el boton")
        console.log(event);
        console.log(event.target)
      }}>+</button>
    );
}

export {CreateToDoButton}