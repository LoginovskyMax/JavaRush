import axios from 'axios';
import { getCookies } from '../actions/cookies';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await getCookies('token')

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getItem('refreshToken');
//       try {
//         const { data } = await axiosInstance.post('/auth/refresh-token', { token: refreshToken });
//         localStorage.setItem('accessToken', data.accessToken);
//         axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
//         return axiosInstance(originalRequest);
//       } catch (refreshError) {
//         // Handle token refresh error (e.g., redirect to login)
//       }
//     }
//     return Promise.reject(error);
//   }
// );
export default axiosInstance;