import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login, logout } from "../store/auth/authSlice";
import { FirebaseAuth } from "../firebase/config";
import { startLoadingNotes } from "../store/journal";

export const useCheckAuth = () => {
    const { status } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async (user) => {
            if (!user) return dispatch(logout())
            const { uid, emmail, displayName, photoURL } = user;
            dispatch(login({ uid, emmail, displayName, photoURL }))
            dispatch( startLoadingNotes())

        })
    }, [])

    return {
        status
    }
}
