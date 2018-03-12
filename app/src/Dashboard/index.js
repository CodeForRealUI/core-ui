import Loadable from 'react-loadable';
import Spinner from '../shared/Spinner';

export default Loadable({
  loader: () => import('./Dashboard'),
  loading: Spinner
});
