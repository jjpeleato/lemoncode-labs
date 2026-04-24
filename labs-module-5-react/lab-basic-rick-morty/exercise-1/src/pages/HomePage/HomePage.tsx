import { Container, Typography, Box } from '@mui/material';

export const HomePage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          HomePage
        </Typography>
      </Box>
    </Container>
  );
}
