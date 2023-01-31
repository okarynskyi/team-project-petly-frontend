import { createSlice } from '@reduxjs/toolkit';
import { addPet, listPets, removePet, getUserData } from './userOperations';

const initialState = {
  profile: {
    userData: {
      name: null,
      email: null,
      birthday: null,
      phone: null,
      city: null,
      avatarURL: null,
      favorites: [],
    },
    userPets: [],
  },
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
      const filteredUserPets = state.userPets.filter(
        item => item.id !== payload
      );

      state.userPets = filteredUserPets;
    },

    [getUserData.fulfilled](state, { payload }) {
      state.profile = payload;
    },
  },
});

export const userReducer = userSlice.reducer;
