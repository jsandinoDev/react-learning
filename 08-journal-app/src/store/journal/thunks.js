import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, noteUpdated, setPhotosToActiveNote, deleteNoteById } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";


export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote())

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            imageUrls: []
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

        dispatch(setNotes(notes));
    }
}

export const startSaveNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving())

        const { uid } = getState().auth;
        const { isActive: note } = getState().journal;
        const noteToFireStore = { ...note };

        delete noteToFireStore.id;
        console.log(noteToFireStore)

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);

        await setDoc(docRef, noteToFireStore, { merge: true })

        dispatch(noteUpdated(note))

    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch) => {
        dispatch(setSaving())
        // await fileUpload(files[0]);
        const fileUploadPromises = [];

        for (const file of files) {
            fileUploadPromises.push(fileUpload(files[0]))
        }

        const photosURLs = await Promise.all(fileUploadPromises);

        dispatch(setPhotosToActiveNote(photosURLs))

    }
}

export const startDeletingNote = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        const { isActive: note } = getState().journal;

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);

        await deleteDoc(docRef)

        dispatch(deleteNoteById(note.id))
    }
}