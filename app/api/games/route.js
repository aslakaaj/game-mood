import { NextResponse } from "next/server";
import connectDB from "@/config/database";
import Game from "@/models/Game";

export const GET = async (request) => {
    try {
        await connectDB();
        const games = await Game.find();
        return new NextResponse(JSON.stringify(games), {status: 200});
    }
    catch (error) {
        return new NextResponse("Error in fetching games: " + error, {status: 500});
    }
}