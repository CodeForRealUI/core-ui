/**
 * @overview
 * "Basic screens" are screens that do not require authorization
 * and are unrelated to the core functionality of the product.
 */
import NotFound from '../src/shared/NotFound';
import SignIn from '../src/SignIn';

export default [
  {
    path: '/sign-in',
    exact: true,
    component: SignIn,
  },
  {
    path: '/404',
    component: NotFound,
  },
];
