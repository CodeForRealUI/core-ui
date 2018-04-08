import { createMuiTheme } from 'material-ui/styles';

export default createMuiTheme({
  palette: {
    type: 'light',
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
  },
});
