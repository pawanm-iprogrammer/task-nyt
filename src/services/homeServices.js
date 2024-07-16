import { api_key, baseUrl, endpoints } from '../utils/axios';
import axios from 'axios'


export const getArticleList = async () => {
    try {
      const response = await axios.get(baseUrl+endpoints.most_popular.crud(api_key));
      if (response) {
        return { success: true, status: response.status, data: response.data };
      }
  
      throw new Error('Invalid credentials');
    } catch (error) {
      return { success: false, error };
    }
  };