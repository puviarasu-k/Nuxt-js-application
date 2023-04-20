import http from '../http-common';

class authService {
    register(data) {
        return http.post("/register", data);
    }
    login(data) {
        return http.post("/login", data);
    }
    refresh() {
        return http.post("/refresh")
    }
}

export default new authService();