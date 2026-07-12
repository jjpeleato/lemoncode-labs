import { Box, Tabs, Tab } from '@mui/material';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { CartProvider } from '../presentation/context/CartContext';
import { CartPanel } from '../presentation/components/CartPanel/CartPanel';
import { ROUTES } from '../router/routes.constants';

export const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <CartProvider>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Box sx={{ flex: 1, p: 3 }}>
          <Tabs
            value={location.pathname}
            onChange={(_, value) => navigate(value)}
            sx={{ mb: 3, borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab label="Kitties" value={ROUTES.KITTIES} />
            <Tab label="Puppies" value={ROUTES.PUPPIES} />
          </Tabs>

          <Outlet />
        </Box>

        <Box component="aside" sx={{ borderLeft: 1, borderColor: 'divider' }}>
          <CartPanel />
        </Box>
      </Box>
    </CartProvider>
  );
};
