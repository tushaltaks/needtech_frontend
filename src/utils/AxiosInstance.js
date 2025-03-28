import axios from "axios";

export const baseURL = import.meta.env.VITE_API_URL;
export const LoginbaseURL = import.meta.env.VITE_API_AUTH_URL;

const axiosInstacnce = axios.create({
  baseURL: baseURL + "/api/v1",
});

axiosInstacnce.interceptors.response.use(
  (response) => {
    // If the response is successful, return it directly
    return response;
  },
  (error) => {
    // Check if the error status is 401 (Unauthorized)
    if (error.response.status == 401) {
      localStorage.clear(); // Clear local storage (example)
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
export default axiosInstacnce;
