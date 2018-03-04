import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./ScreenHeader'),
  loading: () => null,
});
