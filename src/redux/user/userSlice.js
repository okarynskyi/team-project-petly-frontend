import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import {
  addPet,
  removePet,
  getUserData,
  userUpdate,
  updatePhoto,
  getPets,
} from './userOperations';

const handlePending = state => {
    state.isLoading = true;
    state.isError = null;
};

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
    [getUserData.pending]: handlePending,
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
    [getUserData.rejected](state, { payload }) {
      state.isLoading = false;
      state.isError = payload;
    },

    [getPets.pending]: handlePending,
    [getPets.fulfilled](state, { payload }) {
      state.profile.user = payload;
      state.isLoading = false;
    },
    [getPets.rejected](state, {payload}){
      state.isLoading = false;
      state.isError = payload;
    },

    [addPet.pending]: handlePending,
    [addPet.fulfilled](state, { payload }) {
      state.userPets = [state.userPets, ...payload];
    },
    [addPet.rejected](state, { payload }) {
      state.isLoading = false;
      state.isError = payload;
    },
    
    [removePet.pending]: handlePending,
    [removePet.fulfilled](state, { payload }) {
      const index = state.profile.userPets.findIndex(
        item => item._id === payload._id
      );
      state.profile.userPets.splice(index, 1);
    },
    [removePet.rejected](state, { payload }) {
      state.isLoading = false;
      state.isError = payload;
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
    [userUpdate.rejected](state, {payload}) {
      state.isLoading = false;
      state.isError = payload;
    },

    [updatePhoto.pending]: handlePending,
    [updatePhoto.fulfilled](state, { payload }) {
      state.profile.avatarURL = {
        avatarURL: payload.user.avatarURL,
      };
    },
    [updatePhoto.rejected](state, {payload}) {
      state.isLoading = false;
      state.isError = payload;
      toast.error(`${payload}`);
    },
  },
});

export const userReducer = userSlice.reducer;
