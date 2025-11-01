import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/", // apna backend URL
    headers: {
        "Content-Type": "application/json",
    },
});

// Request Interceptor (token add karne ke liye)
api.interceptors.request.use(
    (config) => {
        const user = localStorage.getItem("user");
        if (user) {
            const token = JSON.parse(user).token; // user object me token store h
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor (errors handle karne ke liye)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            const navigate = useNavigate();
            // Unauthorized → logout karwa do
            localStorage.removeItem("user");
             navigate("/login");
        }
        return Promise.reject(error);
    }
);

export default api;