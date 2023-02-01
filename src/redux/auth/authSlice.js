import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, getCurrentUser } from './authOperations';
import { toast } from 'react-toastify';

const initialState = {
  user: { name: null, email: null, myPets: [], myFavorite: [] },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isError: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.pending](state) {
      state.isLoading = true;
      state.isError = null;
    },
    [signUp.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      toast.success('Successfully registered!');
    },
    [signUp.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
      toast.warn('Wrong password or email!');
    },
    [logIn.pending](state) {
      state.isLoading = true;
      state.isError = null;
    },
    [logIn.fulfilled](state, action) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      console.log(state.user)
      toast.success('Successfully logged in!');
    },
    [logIn.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
      toast.error('Wrong password or email!');
    },
    [logOut.pending](state) {
      state.isLoading = true;
      state.isError = null;
    },
    [logOut.fulfilled](state, { payload }) {
      console.log(payload)
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      toast.success('Successfully logged out!');
    },
    [logOut.rejected](state, { payload }) {
      console.log(`error ${payload}`)
      state.isLoading = false;
      state.isError = payload;
      toast.error('Something went wrong, please try again!');
    },
       [getCurrentUser.pending](state) {
      state.isLoading = true;
      state.isFetchingCurrentUser = true;
    },
    [getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isFetchingCurrentUser = false;
      state.error = null;
    },
    [getCurrentUser.rejected](state, action) {
      state.isFetchingCurrentUser = false;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import {signUp, logIn, logOut, getCurrentUser, userUpgade} from './authOperations';

// const handleRejectedOrLogOut = state => {
//     state.user = { name: null, email: null };
//     state.token = null;
//     state.isLoggedIn = false;
// };

// const initialState = {
//     user: { name: null, email: null },
//     token: null,
//     isLoggedIn: false
// };

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     extraReducers: {
//         [signUp.rejected]: handleRejectedOrLogOut,
//         [logIn.rejected]: handleRejectedOrLogOut,
//         [logOut.fulfilled]: handleRejectedOrLogOut,

//         [signUp.fulfilled](state, { payload }) {
//             state.token = payload.token;
//             state.isLoggedIn = true;
//             const { _id, name, email, city, phone, birthday, avatarURL } = payload.user;

//             state.user = { id: _id, name, email, city, phone, birthday, avatarURL };
//         },

//         [logIn.fulfilled](state, { payload }) {
//             state.token = payload.token;
//             state.isLoggedIn = true;
//             const { _id, name, email, city, phone, birthday, avatarURL, favorites } = payload.user;

//             state.user = { id: _id, name, email, city, phone, birthday, avatarURL, favorites };
//         },

//         [getCurrentUser.fulfilled](state, { payload }) {
//             const { _id, name, email, city, phone, birthday, avatarURL, favorites } = payload.user;

//             state.user = { id: _id, name, email, city, phone, birthday, avatarURL, favorites };
//             state.isLoggedIn = true;
//         },

//         [userUpgade.fulfilled](state, { payload }) {
//             state.user = {
//                 ...state.user,
//                 ...payload,
//             };
//         },
//     },
// });

// export const authReducer = authSlice.reducer;
