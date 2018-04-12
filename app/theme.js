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
