import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    if (!query) {
        return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
    }

    const API_KEY = process.env.YOUTUBE_API_KEY;
    const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=1&q=${encodeURIComponent(query)}&key=${API_KEY}`;

    try {
        const response = await fetch(YOUTUBE_API_URL);
        if (!response.ok) {
            throw new Error(`YouTube API error: ${response.statusText}`);
        }
        const data = await response.json();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}