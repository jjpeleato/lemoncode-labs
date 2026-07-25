import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { OrderProvider } from './presentation/context/OrderProvider';
import { OrderPage } from './pages/OrderPage/OrderPage';

const theme = createTheme({ palette: { mode: 'light' } });

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <OrderProvider>
        <OrderPage />
      </OrderProvider>
    </ThemeProvider>
  );
};

export default App;
