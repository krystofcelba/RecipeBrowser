import { AxiosError, AxiosRequestConfig } from 'axios';

import * as API from '../api';

describe('API response handlers', () => {
  it('success', () => {
    const responseData = {};
    expect(API.handleSuccessResponse({ data: responseData })).toEqual({ ok: true, data: responseData });
  });

  it('error', () => {
    const error = new Error('error') as AxiosError;
    error.request = { responseText: 'error' };
    expect(API.handleErrorResponse(error)).toEqual({ ok: false, data: {}, errorMessage: error.request.responseText });
  });
});

describe('API get', () => {
  it('success', () => {
    const replyData = { test: 'aaa' };
    API.apiClient.get = async (_, config?: AxiosRequestConfig): Promise<any> => {
      return {
        data: replyData,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      };
    };
    return expect(API.get('/')).resolves.toEqual({ ok: true, data: replyData });
  });

  it('error', () => {
    const errorMessage = 'The Internet connection appears to be offline.';
    API.apiClient.get = async () => {
      const error = new Error('error') as AxiosError;
      error.request = { responseText: errorMessage };
      throw error;
    };
    return expect(API.get('/')).resolves.toEqual({ ok: false, data: {}, errorMessage });
  });
});

describe('API post', () => {
  const postData = { test: 'aaa' };
  it('success', () => {
    const replyData = { success: true };
    API.apiClient.post = async (_, config?: AxiosRequestConfig): Promise<any> => {
      return {
        data: replyData,
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      };
    };
    return expect(API.post('/', postData)).resolves.toEqual({ ok: true, data: replyData });
  });

  it('error', () => {
    const errorMessage = 'The Internet connection appears to be offline.';
    API.apiClient.post = async () => {
      const error = new Error('error') as AxiosError;
      error.request = { responseText: errorMessage };
      throw error;
    };
    return expect(API.post('/', postData)).resolves.toEqual({ ok: false, data: {}, errorMessage });
  });
});
