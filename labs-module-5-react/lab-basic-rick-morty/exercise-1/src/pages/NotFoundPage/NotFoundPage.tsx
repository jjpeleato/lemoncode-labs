import { Container, Typography, Box } from '@mui/material';

export const NotFoundPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          404 Not found
        </Typography>
      </Box>
    </Container>
  );
}
