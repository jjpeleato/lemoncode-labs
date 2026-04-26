import { Alert, Box, CircularProgress, Grid } from "@mui/material";
import { CharacterCard } from "../CharacterCard/CharacterCard";
import { memo } from "react";
import type { Character } from "../../types/character-api.types";

interface CharacterListProps {
  characters: Character[];
  isLoading: boolean;
  error: string | null;
  onClick: (id: number) => void
}

export const CharacterList = memo(({ characters, isLoading, error, onClick }: CharacterListProps) => {
  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        {error}
      </Alert>
    );
  }

  if (characters.length === 0) {
    return (
      <Alert severity="info" sx={{ mt: 2 }}>
        No characters found.
      </Alert>
    );
  }

  return (
    <Grid container spacing={3}>
      {characters.map((character) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={character.id}>
          <CharacterCard character={character} onClick={onClick} />
        </Grid>
      ))}
    </Grid>
  );
});
