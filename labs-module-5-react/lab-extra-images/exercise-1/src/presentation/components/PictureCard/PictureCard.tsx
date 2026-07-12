import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Checkbox,
  Typography,
  Box,
} from '@mui/material';
import type { PictureViewModel } from '../../hooks/useGalleryPictures';

interface PictureCardProps {
  picture: PictureViewModel;
  onToggle: (id: string) => void;
}

export const PictureCard = ({ picture, onToggle }: PictureCardProps) => {
  return (
    <Card elevation={2}>
      <CardActionArea onClick={() => onToggle(picture.id)}>
        <CardMedia
          component="img"
          image={picture.picUrl}
          alt={picture.title}
          sx={{ aspectRatio: '1 / 1', objectFit: 'cover' }}
        />
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Checkbox
              checked={picture.selected}
              onChange={() => onToggle(picture.id)}
              onClick={(e) => e.stopPropagation()}
            />
            <Typography variant="body2">{picture.title}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
