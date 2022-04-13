import axios from "axios";

const env = {
    "local" : "http://127.0.0.1:5000/api/",
    "prod" : "https://the-trade-book.herokuapp.com/api/"
}

const API = axios.create({
    baseURL: env["prod"]
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
export const register = (formData) => API.post('/register', formData)
export const logout = () => API.post('/logout')