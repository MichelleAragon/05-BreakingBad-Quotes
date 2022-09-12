import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
    const [formState, setformState] = useState( initialForm );


    const onInputChange = ({target}) => { //recibe event pero lo desestructure en target
        const { name, value } = target; //el name y el value viene del target
        setformState({
            ...formState,
            [ name ]: value, //propiedades computadas de los objetos donde name es la que voy a establecer en el objeto y el valor va a ser igual a VALUE
            
        })
    }

    const onResetForm = () => {
        setformState( initialForm );
    }

    return {
        ...formState,
        formState,
        onResetForm,
        onInputChange,
    }
}
