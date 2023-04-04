import axios from 'axios';
import authservice from './service/axios_config'

const axiosClient = axios.create({
    baseURL: "http://localhost:2000",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    // timeout: 8000
});

axiosClient.interceptors.request.use(function (config) {
    if (document.cookie) {
        console.log("1");
        config.headers['Token'] = document.cookie
    }
    else {
        console.log("2");
        const op = authservice.refresh();
        async function refresh() {
            const op =  await authservice.refresh();
            console.log(op);
        }
        // console.log(refresh);
        refresh();
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