import type { CharacterStatus } from "../types/character-api.types";

export const STATUS_COLOR: Record<
  CharacterStatus,
  "success" | "error" | "default"
> = {
  Alive: "success",
  Dead: "error",
  unknown: "default",
};
