import axios from "axios";

const API = axios.create({
    baseURL: "http://127.0.0.1:5000/api/"
});

// setting auth header

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')){
        const token = JSON.parse(localStorage.getItem('profile'))?.access_token
        req.headers.Authorization = `Bearer ${token}`
    }
    return req;
})

export const login = (formData) => API.post('/login', formData)
export const logout = () => API.post('/logout')