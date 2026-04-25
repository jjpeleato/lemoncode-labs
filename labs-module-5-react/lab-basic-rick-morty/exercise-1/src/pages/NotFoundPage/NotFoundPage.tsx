import { Box, Container, Typography } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

export const NotFoundPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          textAlign: "center",
          gap: 3,
        }}
      >
        <SentimentDissatisfiedIcon
          sx={{ fontSize: 80, color: "text.disabled" }}
        />
        <Box>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "6rem", md: "8rem" }, lineHeight: 1 }}
          >
            404
          </Typography>
          <Typography variant="h5" gutterBottom>
            Page not found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            The page you are looking for does not exist or has been moved.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
