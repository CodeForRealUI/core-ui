import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./ResetPassword'),
  loading: () => null,
});
