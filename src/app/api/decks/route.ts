import { NextResponse } from "next/server";
import { db } from "~/server/db";

// GET /api/cards
export async function GET() {
  try {
    const decks = await db.card.findMany();
    return NextResponse.json(decks);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch cards" }, { status: 500 });
  }
}