export const isRequired = (fieldName) => `${fieldName} is required`;

export const mustMatch = (otherFieldName) => (fieldName) => `${fieldName} must match`;

export const minLength = (length) => (fieldName) => `must be at least ${length} characters`;
