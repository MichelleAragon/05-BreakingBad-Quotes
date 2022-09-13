import { useRef } from "react"


export const FocusScreen = () => {

    //Mantener referencia de objetos/valores booleanos que no necesitan ser re-renderizados
    //Tambien sirven de referencia a un elemento HTML
    const inputRef = useRef();


    const onClick = () => {

        // document.querySelectorAll('input').select();
        inputRef.current.select();
        
    }


  return (
    <>
        <h1>FocusScreen</h1>
        <hr/> 

        <input
            type="text"
            placeholder="Ingrese su nombre"
            className="form-control"
            //Usamos la referencia que queremos que se aplique la funcion en el elemento HTML
            ref= { inputRef }
        />

        
        

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClick }
            >
                Set Focus</button>
    </>
  )
}
