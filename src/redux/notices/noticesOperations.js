import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from '../../services/apiService';

// // Utility to add JWT
// const setAuthHeader = token => {
//     axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// // Utility to remove JWT
// const clearAuthHeader = () => {
//     axiosInstance.defaults.headers.common.Authorization = '';
// };

// ендпоінт для отримання оголошень по категоріям
const getNoticesByCategory = createAsyncThunk(
    'notices/getByCategory',
    async (categoryName, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get(`/notices/${categoryName}`);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

// get '/notices/:noticeId' отримання одного оголошення
const getOneNotice = createAsyncThunk(
    'notices/getOneNotice',
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get(`/notices/${id}`);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

// post '/notices/favorites/:noticeId'  додавання оголошення до обраних
const addToFavorites = createAsyncThunk(
    'notices/addToFavorites',
    async (id, { rejectWithValue }) => {
        try {
            await axiosInstance.post(`/notices/favorites/${id}`);

            // щось повертаємо???
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

// get '/notices/favorites' отримання оголошень авторизованого користувача доданих ним же в обрані
const getFavorites = createAsyncThunk(
    'notices/getFavorites',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get('/notices/favorites');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

// delete '/notices/favorites/:noticeId' видалення оголошення авторизованого користувача доданих цим же до обраних
const deleteFromFavorites = createAsyncThunk(
    'notices/deleteFromFavorites',
    async (id, { rejectWithValue }) => {
        try {
            await axiosInstance.delete(`/notices/favorites/id`);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

// post '/notices'  додавання оголошень відповідно до обраної категорії

// get '/notices' отримання оголошень авторизованого кристувача створених цим же користувачем
const getUserNotices = createAsyncThunk(
    'notices/getUserNotices',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axiosInstance.get('/notices');
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

// delete '/notices/:noticeId' видалення оголошення авторизованого користувача створеного цим же користувачем
const deleteUserNotice = createAsyncThunk(
    'notices/deleteUserNotice',
    async (id, { rejectWithValue }) => {
        try {
            await axiosInstance.delete(`/notices/${id}`);
            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

const operations = {
    getNoticesByCategory,
    getOneNotice,
    addToFavorites,
    getFavorites,
    deleteFromFavorites,
    getUserNotices,
    deleteUserNotice,
};

export default operations;