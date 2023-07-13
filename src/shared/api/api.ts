import axios from 'axios';
import { tokenService } from '@/shared/lib/services/token.service';

export const $api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
  },
  withCredentials: true,
});

$api.interceptors.request.use(async (config) => {
  const token = tokenService.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (err) => Promise.reject(err));