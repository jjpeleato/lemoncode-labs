import { NextResponse } from "next/server";
import { getHouses } from "@/lib/houses";

// Not consumed by the app itself — see README for why this endpoint exists.
export async function GET() {
  return NextResponse.json(getHouses());
}
