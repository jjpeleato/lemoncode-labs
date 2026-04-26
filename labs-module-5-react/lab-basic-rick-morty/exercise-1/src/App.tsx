import { AppRouter } from "@router/AppRouter";
import { ErrorBoundary } from "@shared";
import { Alert, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const errorFallback = (
  <Alert severity="error" sx={{ m: 2 }}>
    Something went wrong. Please try again.
  </Alert>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary fallback={errorFallback}>
        <AppRouter />
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
