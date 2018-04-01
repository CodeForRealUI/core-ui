import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./BootCampRoleSignup'),
  loading: () => null,
});
