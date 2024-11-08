import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";


export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote())

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = await doc(collection(FirebaseDB, `${uid}/journal/notes`));

        const setDocResp = await setDoc(newDoc, newNote);

        // dispatch
        newNote.id = newDoc.id;
        dispatch(addNewEmptyNote(newNote))
        // dispatch (activate note)
        dispatch(setActiveNote(newNote))
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        const notes = await loadNotes(uid);

        dispatch( setNotes(notes));
    }
}