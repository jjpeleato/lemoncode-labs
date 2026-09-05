import { getHouseById } from "@/lib/houses";
import { NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// Not consumed by the app itself — see README for why this endpoint exists.
export async function GET(_request: Request, { params }: RouteParams) {
  const { id } = await params;
  const house = getHouseById(id);

  if (!house) {
    return NextResponse.json({ error: "House not found" }, { status: 404 });
  }

  return NextResponse.json(house);
}
