import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://petly-backend-v11f.onrender.com/api';

export const getUserData = createAsyncThunk(
  'user/getUserData',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userUpdate = createAsyncThunk(
  'auth/userUpdate',
  async (credentials, { rejectWithValue }) => {
    console.log(credentials);
    try {
      const { data } = await axios.patch('/auth', credentials);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updatePhoto = createAsyncThunk(
  'auth/updatePhoto',
  async (credentials, { rejectWithValue }) => {
    console.log('credentials з операцій', credentials);
    try {
      const { data } = await axios.patch('/auth', credentials);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addPet = createAsyncThunk(
  'user/addPet',
  async (post, { rejectWithValue }) => {
    console.log(post);
    try {
      const { data } = await axios.post('/users/pets', post);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removePet = createAsyncThunk(
  'user/removePet',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/pets/${id}`);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const listPets = createAsyncThunk(
  'user/listPets',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users/pets');

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


