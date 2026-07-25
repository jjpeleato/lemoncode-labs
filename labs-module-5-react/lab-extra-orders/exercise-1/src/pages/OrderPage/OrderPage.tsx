import { Box, Container, Paper, Typography, CircularProgress, Alert, Divider } from '@mui/material';
import { useOrderContext } from '../../presentation/hooks/useOrderContext';
import { OrderHeaderInfo } from '../../presentation/components/OrderHeaderInfo/OrderHeaderInfo';
import { OrderSummary } from '../../presentation/components/OrderSummary/OrderSummary';
import { OrderLinesTable } from '../../presentation/components/OrderLinesTable/OrderLinesTable';

export const OrderPage = () => {
  const { isLoading, error } = useOrderContext();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Pedido a proveedor
      </Typography>

      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
          <CircularProgress />
        </Box>
      )}

      {error && <Alert severity="error">{error}</Alert>}

      {!isLoading && !error && (
        <Paper variant="outlined" sx={{ p: 3 }}>
          <OrderHeaderInfo />

          <Divider sx={{ my: 3 }} />

          <OrderSummary />

          <Divider sx={{ my: 3 }} />

          <OrderLinesTable />
        </Paper>
      )}
    </Container>
  );
};
