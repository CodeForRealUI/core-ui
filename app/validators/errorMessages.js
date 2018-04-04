/* eslint-disable no-unused-vars */
export const isRequired = fieldName => `${fieldName} is required`;
/* eslint-disable */
export const mustMatch = (otherFieldName) => fieldName =>
  `${fieldName} must match`;

export const minLength = length => fieldName =>
  `must be at least ${length} characters`;
/* eslint-enable */
export const validName = () => 'must be a valid name';
