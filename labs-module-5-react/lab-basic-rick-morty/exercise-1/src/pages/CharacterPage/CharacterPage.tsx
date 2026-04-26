import { Alert, Box, Button, CircularProgress, Container } from "@mui/material";
import { CharacterDetail, useCharacter } from "@features/characters";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const CharacterPage = () => {
  const navigate = useNavigate();
  const { character, isLoading, error } = useCharacter();

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        variant="text"
        sx={{ mb: 3 }}
      >
        Back
      </Button>
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : character ? (
        <CharacterDetail character={character} />
      ) : null}
    </Container>
  );
};
