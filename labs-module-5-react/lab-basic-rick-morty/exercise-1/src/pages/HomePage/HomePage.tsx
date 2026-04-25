import { buildCharacterDetailRoute } from '../../router/routes.constants';
import { CharacterList } from '../../features/characters/components/CharacterList/CharacterList';
import { CharacterSearchBar } from '../../features/characters/components/CharacterSearchBar/CharacterSearchBar';
import { Container, Typography, Box } from '@mui/material';
import { useCharacters } from '../../features/characters/hooks/useCharacters';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const navigate = useNavigate();
  const {
    characters,
    isLoading,
    error,
    totalPages,
    totalCount,
    inputValue,
    handleInputChange,
    handleSearch,
    handleReset
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
      <CharacterSearchBar
        value={inputValue}
        isLoading={isLoading}
        onChange={handleInputChange}
        onSearch={handleSearch}
        onReset={handleReset}
      />
      <CharacterList
        characters={characters}
        isLoading={isLoading}
        error={error}
        onClick={handleClick}
      />
    </Container>
  );
}
