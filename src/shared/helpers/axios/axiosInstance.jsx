import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://classroom-assistant-backend.onrender.com",
});

export default axiosInstance;
