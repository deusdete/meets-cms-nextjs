import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00aeed',
    },
    secondary: {
      main: '#5cd2fd',
    },
    error: {
      main: red.A400,
    },
    inherit:{
        main: '#fff'
    },
    background: {
      default: '#fff',
    },
    text:{
    }
  },
  
});

export default theme;