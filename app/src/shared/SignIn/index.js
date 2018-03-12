import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./SignIn'),
  loading: () => null,
});
