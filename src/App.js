import './App.css';
import Main from './components/Main';
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFA399",
    },
    secondary: {
      main: '#63372C',
    },
    info: {
      main: '#CB8367',
    },
    success: {
      main: '#F2E5D7',
    },
    action:{
     hover: "#7F4739"
   },
   
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
