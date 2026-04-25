import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import { STATUS_COLOR } from "../../constants/character.constants";
import { useCallback } from "react";
import type { Character } from "../../types/character-api.types";

interface CharacterCardProps {
  character: Character;
  onClick: (id: number) => void;
}

export const CharacterCard = ({character, onClick}: CharacterCardProps) => {
  const handleClick = useCallback(() => onClick(character.id), [character.id, onClick]);

  return (
    <Card elevation={2} sx={{ height: "100%" }}>
      <CardActionArea onClick={handleClick} sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          image={character.image}
          alt={character.name}
          sx={{ aspectRatio: "1 / 1", objectFit: "cover" }}
        />
        <CardContent>
          <Typography
            variant="subtitle1"
            gutterBottom
            noWrap
          >
            {character.name}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {character.species}
            </Typography>
            <Chip
              label={character.status}
              color={STATUS_COLOR[character.status] ?? "default"}
              size="small"
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
