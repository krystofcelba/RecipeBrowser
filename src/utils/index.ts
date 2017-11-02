import i18n from 'src/assets/i18n';
import { Map } from 'immutable';

export const isString = value => typeof value === 'string';
export const isNumber = value => !isNaN(Number(value));

export const formatImageBase64Uri = ({ mime, data }: { mime: string; data: string }) => `data:${mime};base64,${data}`;
export const extractMimeType = (base64Uri: string) => base64Uri.slice(5, base64Uri.indexOf(';base64,'));

export const validateNewRecipeFormValues = (values: Map<string, any>) => {
  let errors = {};
  const { name, description, ingredients, seasonings, steps } = values.toJS();
  if (!name) {
    errors = { ...errors, name: i18n.t('requiredError', { field: i18n.t('name') }) };
  }
  if (!description) {
    errors = { ...errors, description: i18n.t('requiredError', { field: i18n.t('description') }) };
  }

  if (!ingredients) {
    errors = {
      ...errors,
      ingredients: { _error: i18n.t('atLeastOneError', { field: i18n.t('ingredient').toLowerCase() }) },
    };
  } else {
    const ingredientsErrors = ingredients.map(value => {
      const { name, amount, unit } = value;
      let err = '';
      if (!name) {
        err = `${i18n.t('requiredError', { field: i18n.t('name') })}. `;
      }
      if (!amount) {
        err = `${err}${i18n.t('requiredError', { field: i18n.t('amount') })}. `;
      } else if (amount && !isNumber(amount)) {
        err = `${err}${i18n.t('mustBeNumberError', { field: i18n.t('amount') })}. `;
      }
      if (!unit) {
        err = `${err}${i18n.t('requiredError', { field: i18n.t('unit') })}. `;
      }
      return err;
    });
    errors = { ...errors, ingredients: ingredientsErrors };
  }

  if (!seasonings) {
    errors = {
      ...errors,
      seasonings: { _error: i18n.t('atLeastOneError', { field: i18n.t('seasoning').toLowerCase() }) },
    };
  } else {
    const arrayErrors = seasonings.map(value => {
      return !isString(value) ? `${i18n.t('requiredError', { field: i18n.t('value') })}. ` : '';
    });
    errors = { ...errors, seasonings: arrayErrors };
  }

  if (!steps || !steps.length) {
    errors = {
      ...errors,
      steps: { _error: i18n.t('atLeastOneError', { field: i18n.t('step').toLowerCase() }) },
    };
  } else {
    const arrayErrors = steps.map(value => {
      return !isString(value) ? `${i18n.t('requiredError', { field: i18n.t('value') })}. ` : '';
    });
    errors = { ...errors, steps: arrayErrors };
  }

  return errors;
};
