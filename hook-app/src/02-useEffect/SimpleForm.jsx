import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'josue',
        email: 'jsandino@google.com'
    })

    const { username, email } = formState;

    const onInputChange = ({target}) => {  
        const {name, value} = target;
        console.log({name, value})
        setFormState({
            ...formState,
            [name] : value
        })
    }

    useEffect( () => {
       // console.log('useEffect')
    }, []);

    useEffect( () => {
       // console.log('useEffect form')
        
    }, [formState]);

    useEffect( () => {
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

            {
                username == 'josue2' && <Message />
            }
        </>
    )
}
