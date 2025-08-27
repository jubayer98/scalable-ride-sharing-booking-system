import config from "@/config"
import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: config.baseUrl,
    withCredentials: true, // Include cookies in requests
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config) {
        // Attach Authorization header if accessToken exists
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers = config.headers || {};
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(function onFulfilled(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function onRejected(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});