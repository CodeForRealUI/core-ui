/**
 * @overview
 * "Basic screens" are screens that do not require authorization
 * and are unrelated to the core functionality of the product.
 */
import NotFound from '../src/shared/NotFound';
import SignIn from '../src/shared/SignIn';

export default [
  {
    path: '/sign-in',
    exact: true,
    component: SignIn,
  },
  {
    path: '',
    component: NotFound,
  },
];
