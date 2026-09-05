import { NextResponse } from "next/server";
import { getHouses } from "@/lib/houses";

export async function GET() {
  return NextResponse.json(getHouses());
}
