import { NextResponse } from "next/server";
import { db } from "~/server/db";

// GET /api/cards
export async function GET() {
  try {
    const cards = await db.card.findMany();
    return NextResponse.json(cards);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch cards" }, { status: 500 });
  }
}