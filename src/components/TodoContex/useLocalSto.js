import React from "react";

// Esto es un custom Hooks
function useLocalStorage(itemName, initialValue = []){  

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {

    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(itemName);
  
        let parsedItem;
  
        if(!localStorageItem)
        {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
  
      }
      catch(error){
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  console.log(item);

  return {
    item, 
    saveItem, 
    loading, 
    error
  };
}

export{useLocalStorage};

/*
const defaultToDos = [
  {text: "Hacer comida", completed: true},
  {text: "Ir al gimnasio", completed: false},
  {text: "dormir ", completed: false},
  {text: "correr ", completed: false},
  {text: "Nadar", completed: true},
]
*/
/* Tener esto <> </> es lo mismo que tener <React.Fragment> </React.Fragment> */

//localStorage.setItem("ToDos_V1", JSON.stringify(defaultToDos));
//localStorage.removeItem('ToDos_V1'); // Para borrar los datos que tenemos en guardados.
//JSON.stringify(defaultToDos);
