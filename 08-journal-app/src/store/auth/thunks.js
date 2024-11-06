import { signInWithGoogle } from '../../firebase/providers';
import {checkingCredentials} from './authSlice'

export const checkingAuthentication = ( email, password ) => {
    return async (dispatch) => {
        dispatch( checkingCredentials());


    }
}

export const startGoogleSignIn = () =>{
    return async(dispatch)  => {
        dispatch(checkingAuthentication())

        const result = await signInWithGoogle();
    }
}