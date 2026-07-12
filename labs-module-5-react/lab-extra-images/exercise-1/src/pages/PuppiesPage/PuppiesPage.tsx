import { Typography, Box } from '@mui/material';
import { useGalleryPictures } from '../../presentation/hooks/useGalleryPictures';
import { GalleryGrid } from '../../presentation/components/GalleryGrid/GalleryGrid';

export const PuppiesPage = () => {
  const { pictures, isLoading, error, toggle } = useGalleryPictures('puppies');

  return (
    <Box>
      <Typography variant="h4">
        Puppies
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
