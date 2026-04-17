import api from '../axiosConfig';
import ENDPOINTS from '../endpoints';
import { products as staticProducts } from '../../data/staticData';

/**
 * Fetch products from Spring Boot backend — falls back to static data.
 * @returns {Promise<Array>} Products array
 */
export const getProducts = async () => {
  try {
    const response = await api.get(ENDPOINTS.PRODUCTS_LIST);
    return response.data;
  } catch {
    console.info('[Klyvex] Using static products data.');
    return staticProducts;
  }
};
