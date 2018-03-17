import Loadable from 'react-loadable';
import Spinner from 'src/shared/Spinner';

export default Loadable({
  loader: () => import('./SignIn'),
  loading: Spinner,
});
