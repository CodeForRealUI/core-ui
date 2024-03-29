import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./RolePicker'),
  loading: () => null,
});
