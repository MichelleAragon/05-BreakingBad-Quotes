import { useState } from "react";

export const useCounter = ( inicialValue = 10) => {

    const [counter, setcounter] = useState( inicialValue );

    const incrementCounter = () => {
        setcounter( counter + 1); 
    }

    const decrementCounter = () => {
        if (counter === 0 ) return;
        
        setcounter( counter - 1);
    }

    const resetCounter = () => {
        setcounter( inicialValue );
    }

    return {

        counter,
        incrementCounter,
        decrementCounter,
        resetCounter,
        
    }

}