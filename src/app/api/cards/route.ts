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

// POST /api/cards
export async function POST(req: Request) {
  const body = await req.json();
  const { name, manaCost, cmc, colorId, otext, power, toughness, loyalty, defense } = body;

  try {
    const newCard = await db.card.create({
      data: {
        name,
        manaCost,
        cmc,
        colorId,
        otext,
        power,
        toughness,
        loyalty,
        defense
      },
    });
    return NextResponse.json(newCard, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create card" }, { status: 500 });
  }
}
