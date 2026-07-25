import { Grid, Typography } from '@mui/material';
import { useOrderContext } from '../../hooks/useOrderContext';

export const OrderHeaderInfo = () => {
  const { order } = useOrderContext();

  if (!order) return null;

  const header = order.getHeader();

  return (
    <Grid container spacing={4}>
      <Grid size={{ xs: 4 }}>
        <Typography variant="caption" color="text.secondary">
          Número
        </Typography>
        <Typography variant="body1">
          {header.number}
        </Typography>
      </Grid>
      <Grid size={{ xs: 4 }}>
        <Typography variant="caption" color="text.secondary">
          Proveedor
        </Typography>
        <Typography variant="body1">
          {header.provider}
        </Typography>
      </Grid>
      <Grid size={{ xs: 4 }}>
        <Typography variant="caption" color="text.secondary">
          Fecha
        </Typography>
        <Typography variant="body1">
          {header.date}
        </Typography>
      </Grid>
    </Grid>
  );
};
