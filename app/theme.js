import { createMuiTheme } from 'material-ui/styles';

export default createMuiTheme({
  palette: {
    type: 'light',
  },
  overrides: {
    MuiDrawer: {
      paper: {
        zIndex: -1,
        paddingTop: 80,
        paddingLeft: 45,
        paddingRight: 31,
        width: 300,
      },
    },
    MuiSelect: {
      root: {
        width: 200,
      },
    },
  },
});
