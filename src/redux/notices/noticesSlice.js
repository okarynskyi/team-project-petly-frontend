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
        [operations.addToFavorites.fulfilled](state, _) {
            state.isLoading = false;
            state.isError = null;
        },
        [operations.addToFavorites.rejected](state, { payload }) {
            state.isLoading = false;
            state.isError = payload;
        },

        // отримання оголошень авторизованого користувача доданих ним же в обрані  "ЩЕ НЕ ЗРОБЛЕНИЙ БЕК"
        [operations.getFavorites.pending]: handlePending,
        [operations.getFavorites.fulfilled](state, {payload}) {
            state.noticesByCategory = payload.notices;
            state.isLoading = false;
            state.isError = null;
        },
        [operations.getFavorites.rejected](state, { payload }) {
            state.isLoading = false;
            state.isError = payload;
        },

        // видалення оголошення авторизованого користувача доданих цим же до обраних
        [operations.deleteFromFavorites.pending]: handlePending,
        [operations.deleteFromFavorites.fulfilled](state, _) {
            state.isLoading = false;
            state.isError = null;
        },
        [operations.deleteFromFavorites.rejected](state, { payload }) {
            state.isLoading = false;
            state.isError = payload;
        },
        
        // видалення оголошення авторизованого користувача створеного цим же користувачем
        [operations.deleteUserNotice.pending]: handlePending,
        [operations.deleteUserNotice.fulfilled](state, _) {
            state.isLoading = false;
            state.isError = null;
        },
        [operations.deleteUserNotice.rejected](state, { payload }) {
            state.isLoading = false;
            state.isError = payload;
        },

        // додавання оголошень відповідно до обраної категорії
        [operations.createNotice.pending]: handlePending,
        [operations.createNotice.fulfilled](state, { payload }) {
            state.noticesByCategory = [...state.noticesByCategory, payload];
            state.isLoading = false;
            state.isError = null;
        },
        [operations.createNotice.rejected](state, { payload }) {
            state.isLoading = false;
            state.isError = payload;
        },

        // отримання оголошень авторизованого кристувача створених цим же користувачем
        [operations.getUserNotices.pending]: handlePending,
        [operations.getUserNotices.fulfilled](state, { payload }) {
            console.log(payload) /**в масиві приходять обєкти з іншими даними */
            state.noticesByCategory = []
            state.isLoading = false;
            state.isError = null;
        },
        [operations.getUserNotices.rejected](state, { payload }) {
            state.noticesByCategory = [];
            state.isLoading = false;
            state.isError = payload;
        },
        
        // для пошуку
        [operations.getByQuery.fulfilled](state, { payload }) {
            state.isError = null;
            state.isLoading = false;
            state.noticesByCategory = payload;
        },
// для пошуку по категорії
        [operations.getByCategoryQuery.fulfilled](state, { payload }) {
            state.isError = null;
            state.isLoading = false;
            console.log(payload)
            state.noticesByCategory = payload;
        },
    },
});

export const noticesReducer = noticesSlice.reducer;
