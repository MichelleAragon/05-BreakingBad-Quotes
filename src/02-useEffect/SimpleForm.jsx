import { useEffect, useState } from "react";
import { Message } from "./Message";



export const SimpleForm = () => {

    const [formState, setformState] = useState({

        username: 'strider',
        email: 'strider@gmail.com',
    });

    const { username, email } = formState;


    const onInputChange = ({target}) => { //recibe event pero lo desestructure en target
        const { name, value } = target; //el name y el value viene del target
        setformState ({
            ...formState,
            [ name ]: value, //propiedades computadas de los objetos donde name es la que voy a establecer en el objeto y el valor va a ser igual a VALUE
            
        })
    }

    useEffect(() => {
        // console.log('useEffect changed')
    }, []);

    useEffect(() => {
        // console.log('formState changed')
    }, [formState]);

    useEffect(() => {
        // console.log('email changed')
    }, [email]);
    

    return (
        <>
        
            <h1>Simple Form</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value= { username }
                onChange= { onInputChange }
            />

            {
                (username === 'strider2') && <Message/>
            }

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="michelle@gmail.com"
                name="email"
                value={ email }
                onChange= { onInputChange }
            />


        
        </>
    )
}
