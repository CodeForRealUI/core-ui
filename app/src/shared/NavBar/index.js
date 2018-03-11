import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./NavBar'),
  loading: () => null,
});
