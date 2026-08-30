import { NextResponse } from "next/server";
import houses from "@/data/houses.json";

export async function GET() {
  return NextResponse.json(houses);
}
