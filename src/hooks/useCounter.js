import { useState } from "react";

export const useCounter = ( inicialValue = 1) => {

    const [counter, setCounter] = useState( inicialValue );

    const incrementCounter = (value = 1) => {
        setCounter( counter + value); 
    }

    const decrementCounter = (value = 1) => {
        if (counter === 0 ) return;
        
        setCounter( counter - value);
    }

    const resetCounter = () => {
        setCounter( inicialValue );
    }

    return {

        counter,
        incrementCounter,
        decrementCounter,
        resetCounter,
        
    }

}