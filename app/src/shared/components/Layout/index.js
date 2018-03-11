import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./Layout'),
  loading: () => null,
});
