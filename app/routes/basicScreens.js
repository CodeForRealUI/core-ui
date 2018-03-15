/**
 * @overview
 * "Basic screens" are screens that do not require authorization
 * and are unrelated to the core functionality of the product.
 */
import NotFound from '../src/shared/NotFound';
import SignIn from '../src/SignIn';
import SignUp from '../src/SignUp';
import Dashboard from '../src/Dashboard';

export default [
  {
    path: '/sign-in',
    exact: true,
    component: SignIn,
  },
  {
    path: '/sign-up',
    exact: true,
    component: SignUp,
  },
  {
    path: '',
    component: NotFound,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
  },
];
