/**
 * @overview
 * "Basic screens" are screens that do not require authorization
 * and are unrelated to the core functionality of the product.
 */
import NotFound from '../src/shared/components/NotFound';

export default [
  {
    path: '/sign-in',
    exact: true,
    // component: SignIn,
  },
  {
    path: '',
    exact: true,
    component: NotFound,
  },
];
