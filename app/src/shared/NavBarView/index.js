import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./NavBarView'),
  loading: () => null,
});
