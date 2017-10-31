import axios, { AxiosError } from 'axios';

import { BASE_URL } from '../assets/constants';

export type Ingredient = { name: string; amount: number; unit: string };

export interface Recipe {
  id?: number;
  name: string;
  description: string;
  image: string | { uri: string; type: string };
  ingredients: [Ingredient];
  seasonings: [string];
  steps: [string];
  ingredientsNames?: string;
}

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

export const handleErrorResponse = (e: AxiosError) => {
  const response = e.response || { data: {} };
  const errorMessage = e.request.responseText;
  return { ok: false, data: response.data, errorMessage };
};

export const handleSuccessResponse = resp => ({ ok: true, data: resp.data });

export const get = async (path, config = {}) => {
  try {
    const resp = await apiClient.get(path, config);
    return handleSuccessResponse(resp);
  } catch (e) {
    const error = handleErrorResponse(e);
    return error;
  }
};

export const post = async (path, data, config = {}) => {
  try {
    const resp = await apiClient.post(path, data, config);
    return handleSuccessResponse(resp);
  } catch (e) {
    return handleErrorResponse(e);
  }
};
