import { Box, Button, CircularProgress, IconButton, TextField, Tooltip } from "@mui/material";
import { memo, useCallback } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";

interface CharacterSearchBarProps {
  value: string;
  isLoading: boolean;
  onChange: (value: string) => void;
  onSearch: () => void;
  onReset: () => void;
}

export const CharacterSearchBar = memo(({
  value,
  isLoading,
  onChange,
  onSearch,
  onReset,
}: CharacterSearchBarProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSearch();
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
    [onChange],
  );

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        label="Search character"
        placeholder="e.g. Rick, Morty, Beth..."
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
      />
      <Button
        variant="contained"
        onClick={onSearch}
        disabled={isLoading || !value.trim()}
        startIcon={
          isLoading ? (
            <CircularProgress size={16} color="inherit" />
          ) : (
            <SearchIcon />
          )
        }
        sx={{ whiteSpace: "nowrap", minWidth: 140 }}
      >
        {isLoading ? "Searching..." : "Search"}
      </Button>
      <Tooltip title="Clear">
        <span>
          <IconButton
            onClick={onReset}
            disabled={isLoading}
            color="error"
            aria-label="clear"
          >
            <DeleteIcon />
          </IconButton>
        </span>
      </Tooltip>
    </Box>
  );
});
