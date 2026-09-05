import houses from "@/data/houses.json";
import type { House } from "./types";

export function getHouses(): House[] {
  return houses;
}

export function getHouseById(id: string): House | null {
  return houses.find((house) => house.id === id) ?? null;
}
