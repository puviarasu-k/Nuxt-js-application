import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:2000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 8000
});

axiosClient.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['summa'] = 'puviarasu';
    console.log(config);
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
})


axiosClient.interceptors.response.use(
    function (response) {
        console.log(response);
        return response;
    },
    function (error) {
        let res = error.response;
        // if (res.status == 401) {
        //     window.location.href = "/"
        // }
        return Promise.reject(error);
    }
)

export default axiosClient