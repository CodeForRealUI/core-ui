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
    MuiButton: {
      root: {
        backgroundColor: PRIMARY_ORANGE,
        color: 'white',
        textTransform: 'none',
      },
    },
    MuiInput: {
      formControl: {
        'label + &': {
          marginTop: 35,
        },
      },
      underline: {
        '&:before': {
          height: 2,
          backgroundColor: '#D9D9D9',
        },
        '&:hover:not($disabled):before': {
          backgroundColor: '#f3f3f3',
          height: 2,
        },
      },
    },
  },
});
