import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: { "API-KEY": "6abc813c-9b11-4474-87c9-56c0f8b74242" }
});

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string, checked = false, captcha = false) {
        return instance.post(`auth/login`, {email, password, checked, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
};