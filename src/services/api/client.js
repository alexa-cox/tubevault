import axios from 'axios';
import { BASE_URL, DEFAULT_PARAMS } from './config';

export const client = axios.create({
  baseURL: BASE_URL,
  params: DEFAULT_PARAMS,
});

// Request interceptor
client.interceptors.request.use(
  (config) => {
    // Add any request modifications here
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
client.interceptors.response.use(
  (response) => {
    // Transform successful responses here
    return response.data;
  },
  (error) => {
    // Handle errors here
    return Promise.reject(error);
  }
);
