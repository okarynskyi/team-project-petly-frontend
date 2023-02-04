import { createSlice } from "@reduxjs/toolkit";
import operations from './noticesOperations';

const handlePending = state => {
    state.isLoading = true;
    state.isError = null;
};

const initialState = {
    noticesByCategory: [], /**масив всіх оголошень */
    oneNoticeMoreInfo: null, /**додаткова інформація для одного оголошення json */
    isFavorite: false,
    isLoading: false,
    isError: null,
};

const noticesSlice = createSlice({
    name: 'notices',
    initialState,
    extraReducers: {
        // отримання оголошень по категоріям
        [operations.getNoticesByCategory.pending]: handlePending,
        [operations.getNoticesByCategory.fulfilled](state, { payload }) {
            // console.log(payload)
            state.noticesByCategory = payload;
            state.isLoading = false;
            state.isError = null;
        },
        [operations.getNoticesByCategory.rejected](state, { payload }) {
            state.noticesByCategory = [];
            state.isLoading = false;
            state.isError = payload;
        },

        // отримання одного оголошення
        [operations.getOneNotice.pending]: handlePending,
        [operations.getOneNotice.fulfilled](state, { payload }) {
            console.log(payload);
            state.oneNoticeMoreInfo = payload;
            state.isLoading = false;
            state.isError = null;
        },
        [operations.getOneNotice.rejected](state, { payload }) {
            state.oneNoticeMoreInfo = null;
            state.isLoading = false;
            state.isError = payload;
        },

        // додавання оголошення до обраних
        [operations.addToFavorites.pending]: handlePending,
        [operations.addToFavorites.fulfilled](state, { payload }) {
            console.log(payload);
            state.favorites = [payload.user.favorites, ...state.favorites];
            state.isLoading = false;
            state.isError = null;
        },
        [operations.addToFavorites.rejected](state, { payload }) {
            state.isLoading = false;
            state.isError = payload;
        },

        // отримання оголошень авторизованого користувача доданих ним же в обрані  "ЩЕ НЕ ЗРОБЛЕНИЙ БЕК"
        [operations.getFavorites.pending]: handlePending,
        [operations.getFavorites.fulfilled](state, { payload }) {
            console.log(payload);
            state.isLoading = false;
            state.isError = null;
        },
        [operations.getFavorites.rejected](state, { payload }) {
            state.favorites = [];
            state.isLoading = false;
            state.isError = payload;
        },

        // видалення оголошення авторизованого користувача доданих цим же до обраних
        [operations.deleteFromFavorites.pending]: handlePending,
        [operations.deleteFromFavorites.fulfilled](state, { payload }) {
            console.log(payload);
            state.favorites = payload.user.favorites;
            state.isLoading = false;
            state.isError = null;
        },
        [operations.deleteFromFavorites.rejected](state, { payload }) {
            state.isLoading = false;
            state.isError = payload;
        },

        // додавання оголошень відповідно до обраної категорії
        [operations.createNotice.pending]: handlePending,
        [operations.createNotice.fulfilled](state, { payload }) {
            console.log(payload);
            state.noticesByCategory = [...state.noticesByCategory, payload];
            state.isLoading = false;
            state.isError = null;
        },
        [operations.createNotice.rejected](state, { payload }) {
            state.isLoading = false;
            state.isError = payload;
        },
        // для пошуку
        [operations.getByQuery.fulfilled](state, {payload}) {
            state.isError = null;
            state.isLoading = false;
            state.noticesByCategory = payload;
        },

        // отримання оголошень авторизованого кристувача створених цим же користувачем

        // видалення оголошення авторизованого користувача створеного цим же користувачем

    },
});

export const noticesReducer = noticesSlice.reducer;
