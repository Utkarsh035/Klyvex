import api from '../axiosConfig';
import ENDPOINTS from '../endpoints';

/**
 * Auth service — ready for Spring Boot JWT authentication.
 */
export const login = async (credentials) => {
  const response = await api.post(ENDPOINTS.AUTH_LOGIN, credentials);
  if (response.data.token) {
    localStorage.setItem('vynzro_auth_token', response.data.token);
  }
  return response.data;
};

export const register = async (userData) => {
  const response = await api.post(ENDPOINTS.AUTH_REGISTER, userData);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('vynzro_auth_token');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('vynzro_auth_token');
};
