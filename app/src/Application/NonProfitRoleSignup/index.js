import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./NonProfitRoleSignup'),
  loading: () => null,
});
