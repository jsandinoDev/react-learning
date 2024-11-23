import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        status: {},
        errorMessage: undefined,
    },
    reducers: {
        onChecking: (state, action) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined
        },
        onLogin: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = undefined
        },
        onLogOut: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        }

    },
});

export const { onChecking, onLogin, onLogOut, clearErrorMessage } = authSlice.actions;
