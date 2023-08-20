import '../../styles/Button.css';

function CreateToDoButton({ setOpenModal }){
    return(
      <button className="CreateButton" 
      onClick={() => {
        console.log("Hiciste Click en el boton")
        setOpenModal(state => !state);
      }}>+</button>
    );
}

export {CreateToDoButton}