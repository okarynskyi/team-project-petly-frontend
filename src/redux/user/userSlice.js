import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import {
  addPet,
  removePet,
  getUserData,
  userUpdate,
  updatePhoto,
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
    [addPet.pending](state) {
      state.isLoading = true;
      state.isError = null;
    },
    [addPet.fulfilled](state, { payload }) {
      console.log('payload', payload.newPet);
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

    [getUserData.pending]: handlePending,
    [getUserData.fulfilled](state, { payload }) {
      state.profile.user = {
        name: payload.user.name,
        email: payload.user.email,
        birthday: payload.user.birthday,
        phone: payload.user.phone,
        location: payload.user.location,
      };
      state.profile.avatarURL =payload.user.avatarURL;
     
      state.profile.userPets = [...payload.userPets];
    },
    [getUserData.rejected](state, { payload }) {
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
    [userUpdate.rejected](state, { meta, payload }) {
      state.isLoading = false;
      state.isError = payload;
      toast.error(chooseValid(Object.keys(meta.arg)[0]));
      function chooseValid(key) {
        switch (key) {
          case 'email':
            return 'Not valid. Correct, for example, "pet@gmail.com"(7-63 symbols).';
          case 'phone':
            return 'Phone 13 symbols, in the format +380xxxxxxxxx.';
          case 'birthday':
            return 'Not valid. Correct, for example, "01.01.2000"';
          case 'name':
            return 'Name must be in English, contain 2-20 symbols';
          case 'location':
            return 'Not valid. Correct, for example, "Brovary, Kyiv"';
          default:
            return 'Wrong!';
        }
      }
    },

    [updatePhoto.pending]: handlePending,
    [updatePhoto.fulfilled](state, { payload }) {
      state.profile.avatarURL = payload.user.avatarURL;
    },
    [updatePhoto.rejected](state, { payload }) {
      state.isLoading = false;
      state.isError = payload;
      toast.error(`${payload}`);
    },
  },
});

export const userReducer = userSlice.reducer;
