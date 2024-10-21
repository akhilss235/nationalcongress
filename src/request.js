import axios from 'axios';

// Set the base URL for your API
const Baseurl = "https://nodejs.spanglesinfotech.com/";

// Create a new axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: Baseurl,
  withCredentials: true  // Enable sending cookies with cross-origin requests
});

export default axiosInstance;

