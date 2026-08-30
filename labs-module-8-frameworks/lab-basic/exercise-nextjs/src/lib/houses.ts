import type { House } from "./types";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";

export async function getHouses(): Promise<House[]> {
  const response = await fetch(`${BASE_URL}/api/houses`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch houses (${response.status})`);
  }

  return response.json();
}

export async function getHouseById(id: string): Promise<House | null> {
  const response = await fetch(`${BASE_URL}/api/houses/${id}`, {
    next: { revalidate: 60 },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch house ${id} (${response.status})`);
  }

  return response.json();
}
