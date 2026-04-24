import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AppRouter } from './router/AppRouter';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
};

export default App;
