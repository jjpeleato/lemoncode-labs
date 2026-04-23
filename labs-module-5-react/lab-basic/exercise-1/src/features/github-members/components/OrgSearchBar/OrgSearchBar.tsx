import { Box, TextField, Button, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface OrgSearchBarProps {
  value: string;
  isLoading: boolean;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export const OrgSearchBar = ({
  value,
  isLoading,
  onChange,
  onSearch,
}: OrgSearchBarProps) => {

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <TextField
        fullWidth
        label="Name of the organization"
        placeholder="microsoft, google, facebook"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
        variant="outlined"
        size="small"
      />
      <Button
        variant="contained"
        onClick={onSearch}
        disabled={isLoading || !value.trim()}
        startIcon={isLoading
          ? <CircularProgress size={16} color="inherit" />
          : <SearchIcon />
        }
        sx={{ whiteSpace: 'nowrap', minWidth: 140 }}
      >
        {isLoading ? 'Searching...' : 'Search'}
      </Button>
    </Box>
  );
};
