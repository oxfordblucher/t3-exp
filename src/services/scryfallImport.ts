import { db } from "~/server/db";
import axios from "axios";

export const scryfallImport = async () => {
    try {
        const res = await axios.get("");
        const bulkData = res.data;

        const filteredCards = bulkData.map((card: any) => ({
            id: card.id,
            name: card.name,
            manaCost: card.mana_cost,
            cmc: card.cmc,
            colorId: card.color_identity,
            otext: card.oracle_text,
            power: card.power ?? null,
            toughness: card.toughness ?? null,
            loyalty: card.loyalty ?? null,
            defense: card.defense ?? null
        }));

        await db.card.deleteMany();

        await db.card.createMany({
            data: filteredCards
        });
    } catch (error) {
        console.error("Error during bulk import:", error);
    }
}