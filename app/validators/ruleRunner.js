/* eslint-disable */
export const ruleRunner = (field, name, ...validations) => state => {
  for (const v of validations) {// es-lint-disable
    const errorMessageFunc = v(state[field], state);
    if (errorMessageFunc) {
      return { [field]: errorMessageFunc(name) };
    }
  }
  return null;
};
/* eslint-enable */
export const run = (state, runners) =>
  runners.reduce((memo, runner) => Object.assign(memo, runner(state)), {});
