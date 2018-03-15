/**
 * @overview
 * "Basic screens" are screens that do not require authorization
 * and are unrelated to the core functionality of the product.
 */
import SignIn from '../src/SignIn';
import Dashboard from '../src/Dashboard';


export const PATHS = {
  SIGN_IN: '/sign-in',
  DASHBOARD: '/dashboard'
};

export default [
  {
    path: PATHS.SIGN_IN,
    component: SignIn,
    exact: true
  },
  {
    path: PATHS.DASHBOARD,
    component: Dashboard,
    exact: true
  },
];
