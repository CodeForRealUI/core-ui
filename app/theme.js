import { createMuiTheme } from 'material-ui/styles';
import { PRIMARY_ORANGE } from '~/theme/colors';

export default createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: PRIMARY_ORANGE,
    },
  },
  overrides: {
    MuiDrawer: {
      paper: {
        zIndex: -1,
        paddingTop: 20,
        paddingLeft: 45,
        paddingRight: 31,
        width: 300,
        position: 'relative',
      },
    },
    MuiSelect: {
      root: {
        width: 200,
      },
    },
    MuiTab: {
      root: {
        backgroundColor: 'white',
      },
    },
  },
});
