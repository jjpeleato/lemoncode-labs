import { useState } from 'react';
import { Box, Tabs, Tab, IconButton, Tooltip } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { CartProvider } from '../presentation/context/CartProvider';
import { CartPanel } from '../presentation/components/CartPanel/CartPanel';
import { ROUTES } from '../router/routes.constants';

export const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isCartVisible, setIsCartVisible] = useState(true);

  return (
    <CartProvider>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Box sx={{ flex: 1, p: 3 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 3,
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <Tabs
              value={location.pathname}
              onChange={(_, value) => navigate(value)}
            >
              <Tab label="Kitties" value={ROUTES.KITTIES} />
              <Tab label="Puppies" value={ROUTES.PUPPIES} />
            </Tabs>

            <Tooltip title={isCartVisible ? 'Hide cart' : 'Show cart'}>
              <IconButton onClick={() => setIsCartVisible((prev) => !prev)}>
                {isCartVisible ? <ShoppingCartCheckoutIcon /> : <ShoppingCartIcon />}
              </IconButton>
            </Tooltip>
          </Box>

          <Outlet />
        </Box>

        {isCartVisible && (
          <Box component="aside" sx={{ borderLeft: 1, borderColor: 'divider' }}>
            <CartPanel />
          </Box>
        )}
      </Box>
    </CartProvider>
  );
};
