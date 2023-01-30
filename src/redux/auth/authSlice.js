import { createSlice } from "@reduxjs/toolkit";
import {signUp, logIn, logOut, getCurrentUser, userUpgade} from './authOperations';

const handleRejectedOrLogOut = state => {
    state.user = { name: null, email: null, myPets: [], myFavorite: [] };
    state.token = null;
    state.isLoggedIn = false;
    state.isLoading = false;
};

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signUp.rejected]: handleRejectedOrLogOut,
        [logIn.rejected]: handleRejectedOrLogOut,
        [logOut.fulfilled]: handleRejectedOrLogOut,
        
        [signUp.fulfilled](state, { payload }) {
            state.token = payload.token;
            state.isLoggedIn = true;
            const { _id, name, email, city, phone, birthday, avatarURL } = payload.user;
            
            state.user = { id: _id, name, email, city, phone, birthday, avatarURL };
        },

        [logIn.fulfilled](state, { payload }) {
            state.token = payload.token;
            state.isLoggedIn = true;
            const { _id, name, email, city, phone, birthday, avatarURL, favorites } = payload.user;

            state.user = { id: _id, name, email, city, phone, birthday, avatarURL, favorites };
        },

        [getCurrentUser.fulfilled](state, { payload }) {
            const { _id, name, email, city, phone, birthday, avatarURL, favorites } = payload.user;
            
            state.user = { id: _id, name, email, city, phone, birthday, avatarURL, favorites };
            state.isLoggedIn = true;
        },

        [userUpgade.fulfilled](state, { payload }) {
            state.user = {
                ...state.user,
                ...payload,
            };
        },
    },
});

export const authReducer = authSlice.reducer;