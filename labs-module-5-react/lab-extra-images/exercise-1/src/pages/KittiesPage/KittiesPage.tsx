import { Typography, Box } from '@mui/material';
import { useGalleryPictures } from '../../presentation/hooks/useGalleryPictures';
import { GalleryGrid } from '../../presentation/components/GalleryGrid/GalleryGrid';

export const KittiesPage = () => {
  const { pictures, isLoading, error, toggle } = useGalleryPictures('kitties');

  return (
    <Box>
      <Typography variant="h4">
        Kitties
      </Typography>
      <GalleryGrid
        pictures={pictures}
        isLoading={isLoading}
        error={error}
        onToggle={toggle}
      />
    </Box>
  );
};
