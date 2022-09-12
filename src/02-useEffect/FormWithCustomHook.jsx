import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
// import { Message } from "./Message";



export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const  {username, email, password} = formState;


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
        
            <h1>Custom Hook Form</h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value= { username }
                onChange= { onInputChange }
            />


            {/* {
                (username === 'strider2') && <Message/>
            } */}

            <input 
                type="email"
                className="form-control mt-2"
                placeholder="michelle@gmail.com"
                name="email"
                value={ email }
                onChange= { onInputChange }
            />

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={ password }
                onChange= { onInputChange }
            />
        
            <button onClick={ onResetForm } className="btn btn-primary mt-2">Reset</button>
        </>
    )
}
