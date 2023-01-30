import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from '../../services/apiService';

// Utility to add JWT
const setAuthHeader = token => {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
    axiosInstance.defaults.headers.common.Authorization = '';
};

export const signUp = createAsyncThunk(
    'auth/signup',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post('/auth/signup', credentials);
            setAuthHeader(data.token);

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.post('/auth/login', credentials);
            setAuthHeader(data.token);

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axiosInstance.post('/auth/logout');
            clearAuthHeader();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('Unable to fetch user');
        };

        setAuthHeader(persistedToken);

        try {
            const { data } = await axiosInstance.get('/auth/current');

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const userUpgade = createAsyncThunk(
    'auth/userUpdate',
    async (credentials, { rejectWithValue }) => {
        console.log(credentials)
        try {
            const { data } = await axiosInstance.patch('/auth', credentials);

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);