import axios from 'axios';

const api = axios.create({ baseURL: process.env.REACT_APP_BASE_API_URL });

api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers['Authorization'] = `Bearer ${process.env.REACT_APP_API_TOKEN}`;
    }

    config.params = { ...config.params, language: 'pt-BR' };

    return config;
}, Promise.reject);

export { api };
