import axios from "axios";
import i18n from "../i18n";

const API_KEY = import.meta.env.VITE_MOVIE_API_READ_ACCESS_TOKEN;

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {language: 'en-US', page: '1'},
    headers:{
        "Content-Type" : "application/json",
        'Authorization': `Bearer ${API_KEY}`
    }
});

api.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        language: i18n.language || 'en', // Use the current language or fallback to 'en'
        page: '1'
    };
    return config;
}, (error) => {
    return Promise.reject(error);
});