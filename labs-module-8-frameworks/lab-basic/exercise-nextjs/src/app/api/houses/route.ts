import { getHouses } from "@/lib/houses";
import { NextResponse } from "next/server";

// Not consumed by the app itself — see README for why this endpoint exists.
export async function GET() {
  return NextResponse.json(getHouses());
}
