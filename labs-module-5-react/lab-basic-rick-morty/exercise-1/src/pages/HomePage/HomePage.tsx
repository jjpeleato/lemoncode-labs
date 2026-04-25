import { buildCharacterDetailRoute } from '../../router/routes.constants';
import { CharacterList } from '../../features/characters/components/CharacterList/CharacterList';
import { Container, Typography, Box, TextField, Button, CircularProgress } from '@mui/material';
import { useCharacters } from '../../features/characters/hooks/useCharacters';
import { useNavigate } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";

export const HomePage = () => {
  const navigate = useNavigate();
  const {
    characters,
    isLoading,
    error,
    totalPages,
    totalCount
  } = useCharacters();

  const handleClick = (id: number) => {
    navigate(buildCharacterDetailRoute(id));
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Rick and Morty
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {totalCount} characters found across {totalPages} pages
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          label="Search character"
          placeholder="e.g. Rick, Morty, Beth..."
        />
        <Button
          variant="contained"
          startIcon={
            isLoading ? (
              <CircularProgress size={16} color="inherit" />
            ) : (
              <SearchIcon />
            )
          }
          disabled={isLoading}
          sx={{ whiteSpace: "nowrap", minWidth: 140 }}
        >
          {isLoading ? "Searching..." : "Search"}
        </Button>
      </Box>
      <CharacterList
        characters={characters}
        isLoading={isLoading}
        error={error}
        onClick={handleClick}
      />
    </Container>
  );
}
