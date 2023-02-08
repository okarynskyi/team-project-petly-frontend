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

export const getUserPets = createAsyncThunk(
  'user/getUserPets',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users/pets');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userUpdate = createAsyncThunk(
  'auth/userUpdate',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/auth', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updatePhoto = createAsyncThunk(
  'auth/updatePhoto',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/auth', credentials);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addPet = createAsyncThunk(
  'user/addPet',
  async (post, { rejectWithValue }) => {
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
  async (_id, { rejectWithValue }) => {
    try {
      await axios.delete(`/users/pets/${_id}`);
      return _id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
  




