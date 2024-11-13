import { loginWithEmailPassword, logOutFirebase, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/providers';
import { clearNotesLogOut } from '../journal';
import { checkingCredentials, login, logout } from './authSlice'

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingAuthentication())

        const result = await signInWithGoogle();

        if (!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await registerUserWithEmailPassword({ email, password, displayName })
        if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));

        dispatch(login(result));
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await loginWithEmailPassword({ email, password });
        if (!result.ok) return dispatch(logout({ errorMessage: result.errorMessage }));

        dispatch(login(result));

    }
}

export const startLogOut = () => {
    return async (dispatch) => {
        await logOutFirebase();
        dispatch(clearNotesLogOut())
        dispatch(logout())
    }
}