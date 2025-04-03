import type { InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

async function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (true) {
    config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiIrOTQxMjM5ODc2NTAiLCJleHAiOjE3Mjc4NzQxNjYuNDA5MjExLCJpYXQiOjE3MjY1NzgxNjYuNDA5Mjc1fQ.pN4XPEAQmS3ds3Hyeaj-MQaJajzZw9KQtB_YXlA2L60`;
  }
  config.headers.Accept = 'application/json';
  return config;
}

export const client = axios.create({
  baseURL: 'https://atlas-paint-mixer-api.azurewebsites.net/api/',
});

client.interceptors.request.use(authRequestInterceptor);
client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
