import * as ErrorMessages from './errorMessages';

export const required = (text) => {
  if (text) {
    return null;
  }
  return ErrorMessages.isRequired;
};

export const mustMatch = (field, fieldName) => (text, state) => !state[field] || state[field] === text ? null : ErrorMessages.mustMatch(fieldName);

export const minLength = (length) => (text) => !text || text.length >= length ? null : ErrorMessages.minLength(length);

export const validName = (name) => !name || name.match(/^[a-zA-Z](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z]){0,18}[a-zA-Z]$/) ? null : ErrorMessages.validName;
