import axios from 'axios';
const axiosClient = axios.create({
    baseURL: "http://192.168.3.207:2000",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 8000
});

axiosClient.interceptors.request.use(function (config) {
    if (document.cookie) {
        config.headers['Token'] = document.cookie
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
})


axiosClient.interceptors.response.use(
    function (response) {
        // Do something after response come here
        return response;
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
)

export default axiosClient