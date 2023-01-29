import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000/api";

export const addPet = createAsyncThunk(
    'user/addPet',
    async (post, { rejectWithValue }) => {
        console.log(post)
        try {
            const { data } = await axios.post('/users/pets', post);

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
            await axios.delete(`/users/pets/${id}`);

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
            const { data } = await axios.get('/users/pets');
        
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
            const { data } = await axios.get('/');

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);