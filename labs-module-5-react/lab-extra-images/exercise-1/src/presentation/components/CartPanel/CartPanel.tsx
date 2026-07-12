import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Divider,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../hooks/useCart';

export const CartPanel = () => {
  const { items, size, isEmpty, toggle, clear } = useCart();

  return (
    <Box sx={{ width: 280, p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
        <ShoppingCartIcon />
        <Typography variant="h6">Cart ({size})</Typography>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {isEmpty && (
        <Typography variant="body2" color="text.secondary">
          No pictures selected yet
        </Typography>
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}
          >
            <Avatar src={item.picUrl} alt={item.title} variant="rounded" />
            <Typography variant="body2" sx={{ flex: 1 }} noWrap>
              {item.title}
            </Typography>
            <IconButton size="small" onClick={() => toggle(item.id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        ))}
      </Box>

      {!isEmpty && (
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={clear}
          sx={{ mt: 3 }}
          fullWidth
        >
          Clear cart
        </Button>
      )}
    </Box>
  );
};
