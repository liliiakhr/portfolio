import './App.css';
import Main from './components/Main';
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    // pink
    primary: {
      main: "#FFA399",
    },
    // brown
    secondary: {
      main: '#63372C',
    },
    // light brown
    info: {
      main: '#CB8367',
    },
    // light
    success: {
      main: '#F2E5D7',
    },
    // brown 2 shades lighter
    action:{
     hover: "#7F4739"
   },
  //  dark brown
   danger:{
     main: '#262322'
   }
  },
  // typography:{

  // }
  
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
