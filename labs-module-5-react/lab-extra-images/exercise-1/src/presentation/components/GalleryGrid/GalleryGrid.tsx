import { Box, CircularProgress, Alert, Grid } from '@mui/material';
import { PictureCard } from '../PictureCard/PictureCard';
import type { PictureViewModel } from '../../hooks/useGalleryPictures';

interface GalleryGridProps {
  pictures: PictureViewModel[];
  isLoading: boolean;
  error: string | null;
  onToggle: (id: string) => void;
}

export const GalleryGrid = ({
  pictures,
  isLoading,
  error,
  onToggle,
}: GalleryGridProps) => {
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Grid container spacing={2}>
      {pictures.map((picture) => (
        <Grid size={{ xs: 6, sm: 4, md: 3 }} key={picture.id}>
          <PictureCard picture={picture} onToggle={onToggle} />
        </Grid>
      ))}
    </Grid>
  );
};
