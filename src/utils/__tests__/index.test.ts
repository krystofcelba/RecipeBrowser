import { Map } from 'immutable';

import { base64Uri, addRecipeFormValues } from 'src/__mockData__';
import { isString, isNumber, extractMimeType, validateNewRecipeFormValues } from '../';

describe('utils functions', () => {
  it('should return true if it is string, false otherwise', () => {
    expect(isString('test')).toBe(true);
    expect(isString(Object('test'))).toBe(false);
  });

  it('should return true if it is number, false otherwise', () => {
    expect(isNumber(9)).toBe(true);
    expect(isNumber('10')).toBe(true);
    expect(isNumber('10.1')).toBe(true);
    expect(isNumber('10.a')).toBe(false);
  });

  it('should extract and return mime type from base 64 data uri', () => {
    expect(extractMimeType(base64Uri)).toBe('image/jpeg');
  });
});

describe('validateNewRecipeFormValues', () => {
  it('should return validations errors as expected', () => {
    expect(validateNewRecipeFormValues(Map({}))).toMatchSnapshot();

    expect(validateNewRecipeFormValues(Map({ ingredients: [] }))).toMatchSnapshot();
    expect(validateNewRecipeFormValues(Map({ ingredients: [{}] }))).toMatchSnapshot();
    expect(validateNewRecipeFormValues(Map({ ingredients: [{ amount: 'a' }] }))).toMatchSnapshot();

    expect(validateNewRecipeFormValues(Map({ seasonings: [''], steps: [''] }))).toMatchSnapshot();
    expect(validateNewRecipeFormValues(Map({ seasonings: [Object('')], steps: [Object('')] }))).toMatchSnapshot();

    expect(validateNewRecipeFormValues(Map(addRecipeFormValues))).toMatchSnapshot();
  });
});
