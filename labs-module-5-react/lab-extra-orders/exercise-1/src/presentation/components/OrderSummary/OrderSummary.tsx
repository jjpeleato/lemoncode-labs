import { Box, Typography, Button, LinearProgress } from '@mui/material';
import { useOrderContext } from '../../hooks/useOrderContext';

export const OrderSummary = () => {
  const { order } = useOrderContext();

  if (!order) return null;

  const handleSend = () => {
    // No hay caso de uso de envío definido en domain todavía — placeholder intencionado
    console.log('Order sent:', order.getHeader().number);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <Box>
        <Typography variant="caption" color="text.secondary">
          Importe Total
        </Typography>
        <Typography variant="h6">
          {order.totalAmount.toLocaleString()} €
        </Typography>
      </Box>

      <Box sx={{ minWidth: 140 }}>
        <Typography variant="caption" color="text.secondary">
          Estado
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LinearProgress
            variant="determinate"
            value={order.validatedPercentage}
            color={order.canSend ? 'success' : 'primary'}
            sx={{ flex: 1, height: 8, borderRadius: 4 }}
          />
          <Typography variant="body2">
            {order.validatedPercentage}%
          </Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        disabled={!order.canSend}
        onClick={handleSend}
        sx={{ ml: 'auto' }}
      >
        Enviar
      </Button>
    </Box>
  );
};
