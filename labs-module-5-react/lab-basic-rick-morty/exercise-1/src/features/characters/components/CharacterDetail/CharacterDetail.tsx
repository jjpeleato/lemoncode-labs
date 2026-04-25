import { Box, Chip, Divider, Paper, Typography } from "@mui/material";
import { InfoRow } from "../InfoRow/InfoRow";
import CategoryIcon from "@mui/icons-material/Category";
import FaceIcon from "@mui/icons-material/Face";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MovieIcon from "@mui/icons-material/Movie";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import TransgenderIcon from "@mui/icons-material/Transgender";
import type { Character } from "../../types/character-api.types";

interface CharacterDetailProps {
  character: Character;
}

const statusColor: Record<string, "success" | "error" | "default"> = {
  Alive: "success",
  Dead: "error",
  unknown: "default",
};

export const CharacterDetail = ({ character }: CharacterDetailProps) => {
  return (
    <Paper elevation={2} sx={{ p: 4, borderRadius: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Box
            component="img"
            src={character.image}
            alt={character.name}
            sx={{
              width: { xs: "100%", md: 280 },
              maxWidth: 280,
              borderRadius: 3,
              flexShrink: 0,
              objectFit: "cover",
            }}
          />
          <Box sx={{ flex: 1, width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 1,
                flexWrap: "wrap",
              }}
            >
              <Typography variant="h4">
                {character.name}
              </Typography>
              <Chip
                label={character.status}
                color={statusColor[character.status] ?? "default"}
                size="small"
              />
            </Box>
            <Divider sx={{ mb: 3 }} />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <InfoRow
                icon={<FaceIcon />}
                label="Species"
                value={character.species}
              />
              {character.type && (
                <InfoRow
                  icon={<CategoryIcon />}
                  label="Type"
                  value={character.type}
                />
              )}
              <InfoRow
                icon={<TransgenderIcon />}
                label="Gender"
                value={character.gender}
              />
              <InfoRow
                icon={<MyLocationIcon />}
                label="Origin"
                value={character.origin.name}
              />
              <InfoRow
                icon={<LocationOnIcon />}
                label="Last known location"
                value={character.location.name}
              />
              <InfoRow
                icon={<MovieIcon />}
                label="Episodes"
                value={`${character.episode.length} episodes`}
              />
            </Box>
          </Box>
        </Box>
      </Paper>
  );
}
