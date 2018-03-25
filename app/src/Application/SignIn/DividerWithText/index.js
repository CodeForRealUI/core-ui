import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./DividerWithText'),
  loading: () => null,
});
