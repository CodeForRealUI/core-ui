import Loadable from 'react-loadable';
import Spinner from 'src/shared/Spinner';
import OauthSignIn from './OAuthSignIn';

export default Loadable({
  loader: () => import(OauthSignIn),
  loading: Spinner,
});
