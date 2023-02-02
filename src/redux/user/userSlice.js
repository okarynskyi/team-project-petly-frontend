import { toast } from 'react-toastify';
import { createSlice } from '@reduxjs/toolkit';
import {
  addPet,
  listPets,
  removePet,
  getUserData,
  userUpdate,
  updatePhoto,
} from './userOperations';

const initialState = {
  profile: {
    userData: {
      name: null,
      email: null,
      birthday: null,
      phone: null,
      location: null,
      avatarURL: null,
      imageURL: null,
      favorites: [],
    },
    userPets: [],
  },
  isLoading: false,
  isError: null,
}
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
      const filteredUserPets = state.profile.userPets.filter(
        item => item.id !== payload
      );
      state.userPets = filteredUserPets;
    },

    [getUserData.fulfilled](state, { payload }) {
      state.profile = payload;
    },
    [userUpdate.pending](state) {
      state.isLoading = true;
      state.isError = null;
    },
    [userUpdate.fulfilled](state, { payload }) {
      console.log('stateupdate', state);
      state = {
        ...state,
        ...payload,
      };
    },
    [userUpdate.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
      toast.error('Something went wrong, please try again!');
    },
    [updatePhoto.pending](state) {
      state.isLoading = true;
      state.isError = null;
    },
    [updatePhoto.fulfilled](state, { payload }) {
      state.profile.userData = payload;
    },
    [updatePhoto.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
      toast.error('Something went wrong, please try again!');
    },
  },
});

export const userReducer = userSlice.reducer;
