import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm(
        // const { formState, onInputChange, username, email, password } = useForm(
        {
            username: '',
            email: '',
            password: ''
        }
    );

    const { username, email, password } = formState;



    useEffect(() => {
        // console.log('useEffect')
    }, []);

    useEffect(() => {
        // console.log('useEffect form')

    }, [formState]);

    useEffect(() => {
        // console.log('useEffect email')

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
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="jsandino@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />


            <button className="btn btn-primary mt-2" 
            onClick={ onResetForm }>
                Borrar
            </button>
        </>
    )
}
