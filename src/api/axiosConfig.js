import axios from 'axios';

/**
 * Axios instance configured for Spring Boot backend.
 * Base URL is read from environment variable VITE_API_BASE_URL.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* ---- Request Interceptor ---- */
api.interceptors.request.use(
  (config) => {
    // Attach JWT token if available (future auth integration)
    const token = localStorage.getItem('klyvex_auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/* ---- Response Interceptor ---- */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        // Handle unauthorized — clear token, redirect to login
        localStorage.removeItem('klyvex_auth_token');
        console.warn('[Klyvex API] Unauthorized — token cleared.');
      }
      if (status === 500) {
        console.error('[Klyvex API] Server error:', error.response.data);
      }
    } else if (error.request) {
      console.warn('[Klyvex API] No response — backend may be offline. Using static data.');
    }
    return Promise.reject(error);
  }
);

export default api;
