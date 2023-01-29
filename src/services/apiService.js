import axios from "axios";

// BaseURL
export const axiosInstance = axios.create({
    baseURL: 'https://petly-backend-v11f.onrender.com/api/',
    //   timeout: 1000,
});


// Запит на всіх друзів
export const getFriends = async () => {
    return await axiosInstance.get('/friends');
};

// Запит на новини
export const getNews = async () => {
    return await axiosInstance.get('/news');
};