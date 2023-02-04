import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, getCurrentUser } from './authOperations';
import { toast } from 'react-toastify';

const initialState = {
  user: { id: null, name: null, email: null, myPets: [], myFavorite: [] },
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
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      toast.success('Successfully logged out!');
    },
    [logOut.rejected](state, { payload }) {
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