import { Image, SearchResponse } from '../types/imagesApi';
import axios from './axios';


export interface SearchItemsResponse {
  totalPages: number;
  total: number;
  items: Array<Image>
}

export const searchItems = async (payload: {value: string, page: number}): Promise<SearchItemsResponse>  => {
  const axiosConfig = {
    params: {
      query: payload.value,
      page: payload.page
    }
  };
  const  apiUrl = '/search/photos';
  const response = await axios.get<SearchResponse>(apiUrl, axiosConfig);
  const { total_pages: totalPages, total, results: items } = response.data;
  return { totalPages, total, items }
};
