import { Box, CircularProgress, Alert, Grid } from '@mui/material';
import type { Character } from '../../types/character-api.types';
import { CharacterCard } from '../CharacterCard/CharacterCard';

interface CharacterListProps {
  characters: Character[];
  isLoading: boolean;
  error: string | null;
}

export const CharacterList = ({ characters, isLoading, error }: CharacterListProps) => {
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
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

  return (
    <Grid container spacing={3}>
      {characters.map((character) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={character.id}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  );
}
