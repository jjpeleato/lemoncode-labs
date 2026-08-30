import { NextResponse } from "next/server";
import houses from "@/data/houses.json";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { id } = await params;

  const house = houses.find((h) => h.id === id);

  if (!house) {
    return NextResponse.json({ error: "House not found" }, { status: 404 });
  }

  return NextResponse.json(house);
}
