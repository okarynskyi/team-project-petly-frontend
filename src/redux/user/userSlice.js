import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import {
  addPet,
  removePet,
  getUserData,
  userUpdate,
  updatePhoto,
} from './userOperations';

const initialState = {
  profile: {
    user: {
      name: null,
      email: null,
      birthday: null,
      phone: null,
      location: null,
    },
    avatarURL: null,
    userPets: [],
  },
  isLoading: false,
  isError: null,
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [addPet.pending](state) {
      state.isLoading = true;
      state.isError = null;
    },
    [addPet.fulfilled](state, { payload }) {
      console.log('payload', payload.newPet)
      state.profile.userPets.push(payload.newPet);
    },
    [addPet.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },
    [removePet.fulfilled](state, { payload }) {
      const index = state.profile.userPets.findIndex(
        item => item._id === payload._id
      );
      state.profile.userPets.splice(index, 1);
    },

    [getUserData.fulfilled](state, { payload }) {
      state.profile.user = {
        name: payload.user.name,
        email: payload.user.email,
        birthday: payload.user.birthday,
        phone: payload.user.phone,
        location: payload.user.location,
      };
      state.profile.avatarURL = {
        avatarURL: payload.user.avatarURL,
      };
      state.profile.userPets = [...payload.userPets];
    },
    [userUpdate.pending](state) {
      state.isLoading = true;
      state.isError = null;
    },
    [userUpdate.fulfilled](state, { payload }) {
      state.profile.user = {
        name: payload.user.name,
        email: payload.user.email,
        birthday: payload.user.birthday,
        phone: payload.user.phone,
        location: payload.user.location,
      };
    },
    [userUpdate.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },
    [updatePhoto.pending](state) {
      state.isLoading = true;
      state.isError = null;
    },
    [updatePhoto.fulfilled](state, { payload }) {
      state.profile.avatarURL = {
        avatarURL: payload.user.avatarURL,
      };
    },
    [updatePhoto.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
      toast.error(`${action.payload}`);
    },
    // [listPets.fulfilled](state, { payload }) {
    //   state.userPets = [...payload];
    // },
  },
});

export const userReducer = userSlice.reducer;
