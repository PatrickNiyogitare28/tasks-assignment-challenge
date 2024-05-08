import axiosInstance from '@/lib/axios';
import { isBrowser } from '.';
import Cookies from 'js-cookie';

export const storage = {
    getAccessToken: () => {
        if (!isBrowser) return;
        return Cookies.get('accessToken');
    },
    setAccessToken: (token: string) => {
        Cookies.set('accessToken', token, { expires: 7 }); // Set the cookie to expire in 7 days
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    getRefreshToken: () => {
        if (!isBrowser) return;
        return Cookies.get('app_refreshToken');
    },
    setRefreshToken: (token: string) => {
        Cookies.set('app_refreshToken', token, { expires: 7 }); // Set the cookie to expire in 7 days
    },
    clear: () => {
        if (!isBrowser) return;
        Cookies.remove('app_token');
        Cookies.remove('app_refreshToken');
    }
}
