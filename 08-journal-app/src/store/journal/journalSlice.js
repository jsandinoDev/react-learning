import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        isActive: null,
    },
    reducers: {
        savingNewNote: (state, action) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.isActive = action.payload;
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = true;
        },
        noteUpdated: (state, action) => { // payload: note
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if(note.id === action.payload.id){
                    return action.payload;
                }

                return note;
            });

            state.messageSaved = `${action.payload.title}, correctly updated`
        },
        setPhotosToActiveNote: (state, action) => {
            state.isActive.imageUrls = [...state.isActive.imageUrls, ...action.payload]
            state.isSaving = false;
        },
        clearNotesLogOut:(state) => {
            state.isSaving = false,
            state.messageSaved = '',
            state.notes = [],
            state.active = null
        },
        deleteNoteById: (state, action) => {
            state.isActive = null,
            state.note = state.notes.filter( note => note.id != action.payload);
        },
    },
});

export const {
    setPhotosToActiveNote,
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    noteUpdated,
    deleteNoteById,
    clearNotesLogOut } = journalSlice.actions;
