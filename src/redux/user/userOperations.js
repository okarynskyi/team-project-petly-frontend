import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from '../../services/apiService';

export const addPet = createAsyncThunk(
    'user/addPet',
    async (post, { rejectWithValue }) => {
        console.log(post)
        try {
            const { data } = await axiosInstance.post('/users/pets', post);

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const removePet = createAsyncThunk(
    'user/removePet',
    async (id, { rejectWithValue }) => {
        try {
            await axiosInstance.delete(`/users/pets/${id}`);

            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const listPets = createAsyncThunk(
    'user/listPets',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get('/users/pets');
        
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    },
);

export const getUserData = createAsyncThunk(
    'user/getUserData',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get('/');

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);