import { Box, Button, Container, Typography } from "@mui/material";
import { ROUTES } from "@router/routes.constants";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleGoHome = useCallback(() => navigate(ROUTES.HOME), [navigate]);

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
        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          onClick={handleGoHome}
        >
          Back to home
        </Button>
      </Box>
    </Container>
  );
};
