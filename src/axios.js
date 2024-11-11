import axios from 'axios';


const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
});

instance.defaults.withCredentials = true;

instance.interceptors.request.use(function (config) {
    return config;
});

instance.interceptors.response.use(
    (response) => {
        return response.data ? response.data : response;
    },
    (error) => {
        // Handle the error (you can add custom logic here)
        return Promise.reject(error);
    }
);


export default instance;