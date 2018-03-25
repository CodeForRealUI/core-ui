import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./Application'),
  loading: () => null,
});
