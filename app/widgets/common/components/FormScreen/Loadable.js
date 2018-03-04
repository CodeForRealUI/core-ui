import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./FormScreen'),
  loading: () => null,
});
