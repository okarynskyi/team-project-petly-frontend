import { createSlice } from '@reduxjs/toolkit';
import { addPet, listPets, removePet, getUserData } from './userOperations';

const initialState = {
    userData: {
        name: null,
        email: null,
        city: null,
        phone: null,
        birthday: null,
        avatarURL: null,
        favorites: [],
    },
    userPets:[]
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [addPet.fulfilled](state, { payload }) {
            state.userPets = [state.userPets, ...payload];
        },

        [listPets.fulfilled](state, { payload }) {
            state.userPets = [...payload];
        },

        [removePet.fulfilled](state, { payload }) {
            const filteredUserPets = state.userPets
                .filter(item => item.id !== payload);
            
            state.userPets = filteredUserPets;
        },

        [getUserData.fulfilled](_, { payload }) {
            console.log(payload);
        },
    },
});

export const userReducer = userSlice.reducer;