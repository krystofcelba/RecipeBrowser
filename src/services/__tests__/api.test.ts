import axios from 'axios';
import { testSaga } from 'redux-saga-test-plan';

import { BASE_URL } from '../../assets/constants';
import * as API from '../api';

it('should format relative url to absolute url', () => {
  expect(API.formatApiUrl('/')).toBe(`${BASE_URL}/`);
});

it('should return response data with ok flag', () => {
  const responseData = {};
  expect(API.handleSuccessResponse({ data: responseData })).toEqual({ ok: true, data: responseData });
});

it('should return response data with errorMessage=error.response.data.error_description', () => {
  const error = { response: { data: { error_description: 'error desc' } }, request: { responseText: 'error' } };
  expect(API.handleErrorResponse(error)).toEqual({
    ok: false,
    data: error.response.data,
    errorMessage: error.response.data.error_description,
  });
});

it('should return response data with errorMessage=error.responseText when error.data.error_description is undefined', () => {
  const error = { request: { responseText: 'error' } };
  expect(API.handleErrorResponse(error)).toEqual({ ok: false, data: {}, errorMessage: error.request.responseText });
});

it('should call axois.get with absolute url, then return data from response', () => {
  const responseData = {};
  testSaga(API.get, '')
    .next()
    .call(axios.get, API.formatApiUrl(''), {})
    .next(API.handleSuccessResponse({ data: responseData }))
    .returns({ ok: true, data: responseData });
});

it('should call axois.post with absolute url and post body, then return data from response', () => {
  const responseData = {};
  testSaga(API.post, '', '')
    .next()
    .call(axios.post, API.formatApiUrl(''), '', {})
    .next(API.handleSuccessResponse({ data: responseData }))
    .returns({ ok: true, data: responseData });
});

it('should get recipes', () => {
  const response = { ok: true, data: require('../__mockData__/recipes.json') };
  testSaga(API.fetchRecipes, '')
    .next()
    .call(API.get, '/recipes')
    .next(response)
    .returns(response);
});
