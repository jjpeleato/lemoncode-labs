import { Box, Container, Typography } from "@mui/material";
import { buildCharacterDetailRoute } from "@router/routes.constants";
import { CharacterList } from "@features/characters";
import { CharacterPagination } from "@features/characters";
import { CharacterSearchBar } from "@features/characters";
import { useCharacters } from "@features/characters";
import { useNavigate } from "react-router-dom";

export const CharactersPage = () => {
  const navigate = useNavigate();
  const {
    characters,
    isLoading,
    error,
    currentPage,
    totalPages,
    totalCount,
    inputValue,
    handleInputChange,
    handleSearch,
    handlePageChange,
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
      <CharacterPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Container>
  );
}
