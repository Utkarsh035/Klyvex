import api from '../axiosConfig';
import ENDPOINTS from '../endpoints';
import { services as staticServices } from '../../data/staticData';

/**
 * Fetch services from Spring Boot backend — falls back to static data.
 * @returns {Promise<Array>} Services array
 */
export const getServices = async () => {
  try {
    const response = await api.get(ENDPOINTS.SERVICES_LIST);
    return response.data;
  } catch {
    console.info('[Klyvex] Using static services data.');
    return staticServices;
  }
};
