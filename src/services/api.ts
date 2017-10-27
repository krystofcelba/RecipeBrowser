import axios from 'axios';
import { call } from 'redux-saga/effects';

import { BASE_URL } from '../assets/constants';

export type Recipe = {
  id: number;
  name: string;
  description: string;
  image: string;
  ingredients: [{ name: string; amount: number; unit: string }];
  seasonings: [string];
  steps: [string];
};

export const formatApiUrl = path => `${BASE_URL}${path}`;

export const handleErrorResponse = e => {
  const response = e.response || { data: {} };
  const errorMessage = response.data.error_description || e.request.responseText;
  return { ok: false, data: response.data, errorMessage };
};

export const handleSuccessResponse = resp => ({ ok: true, data: resp.data });

export function* get(path, config = {}) {
  try {
    const resp = yield call(axios.get, formatApiUrl(path), config);
    return handleSuccessResponse(resp);
  } catch (e) {
    return handleErrorResponse(e);
  }
}

export function* post(path, data, config = {}) {
  try {
    const resp = yield call(axios.post, formatApiUrl(path), data, config);
    return handleSuccessResponse(resp);
  } catch (e) {
    return handleErrorResponse(e);
  }
}

export function* fetchRecipes() {
  return yield call(get, '/recipes');
}