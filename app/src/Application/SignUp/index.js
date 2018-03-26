import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./SignUp'),
  loading: () => null,
});
