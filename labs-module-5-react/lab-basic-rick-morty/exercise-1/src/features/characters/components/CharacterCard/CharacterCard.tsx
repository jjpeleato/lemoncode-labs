import { Box, Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import type { Character } from "../../types/character-api.types";

interface CharacterCardProps {
  character: Character;
}

const statusColor: Record<string, "success" | "error" | "default"> = {
  Alive: "success",
  Dead: "error",
  unknown: "default",
};

export const CharacterCard = ({character}: CharacterCardProps) => {
  return (
    <Card elevation={2} sx={{ height: "100%" }}>
      <CardActionArea sx={{ height: "100%" }}>
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
              color={statusColor[character.status] ?? "default"}
              size="small"
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
