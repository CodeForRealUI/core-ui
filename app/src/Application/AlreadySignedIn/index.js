import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./AlreadySignedIn'),
  loading: () => null,
});
