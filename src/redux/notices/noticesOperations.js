import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://petly-backend-v11f.onrender.com/api';

// ендпоінт для отримання оголошень по категоріям
const getNoticesByCategory = createAsyncThunk(
    'notices/getByCategory',
    async (categoryName, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/notices/category/${categoryName}`);

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
            const { data } = await axios.get(`/notices/${id}`);

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
        console.log(id)
        try {
            const { data } = await axios.post(`/notices/favorites/${id}`);
            console.log(data)
            return data;
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
            const { data } = await axios.get('/notices/user/favorites');

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
            const { data } = await axios.delete(`/notices/favorites/${id}`); 
            
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
            await axios.delete(`/notices/${id}`);

            return id;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);
    
    // post '/notices'  додавання оголошень відповідно до обраної категорії
const createNotice = createAsyncThunk(
    'notices/createNotice',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/notices', credentials);

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

// get '/notices' отримання оголошень авторизованого кристувача створених цим же користувачем
const getUserNotices = createAsyncThunk(
    'notices/getUserNotices',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/notices');

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);


// для пошуку
export const getByQuery = createAsyncThunk(
    'notice/getByQuery',
    async (query, { rejectWithValue }) => {
        try {
            const { data } = await axios.get(`/notices/search/find?name=${query}`);
          
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const operations = {
    getNoticesByCategory,
    getOneNotice,
    addToFavorites,
    getFavorites,
    deleteFromFavorites,
    createNotice,
    getUserNotices,
    deleteUserNotice,
    getByQuery,
};

export default operations;