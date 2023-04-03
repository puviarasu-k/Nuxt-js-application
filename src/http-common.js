import axios from 'axios';

const axiosClient = axios.create({
    baseURL: "http://localhost:2000",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 8000
});

axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Token'] = document.cookie;
    console.log("req");
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
})


axiosClient.interceptors.response.use(
    function (response) {
        console.log("res");
        // Do something after response come here
        return response;
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
)

export default axiosClient