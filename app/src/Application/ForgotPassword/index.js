import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./ForgotPassword'),
  loading: () => null,
});
