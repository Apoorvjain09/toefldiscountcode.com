import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import 'regenerator-runtime/runtime'; // Import regenerator-runtime

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
    throw new Error('Missing OpenAI API key');
}

const openai = new OpenAI({
    apiKey: apiKey,
});

export async function POST(req: NextRequest) {
    try {
        // Parse the incoming JSON body
        const { prompt } = await req.json();

        // Validate the prompt
        if (!prompt || typeof prompt !== 'string') {
            return NextResponse.json({ message: 'Invalid or missing prompt' }, { status: 400 });
        }

        // Call the OpenAI API with the provided prompt
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [{ role: 'user', content: prompt }],
        });

        const responseContent = completion.choices[0]?.message?.content;
        if (!responseContent) {
            throw new Error('No response returned from the OpenAI API');
        }

        return NextResponse.json({ success: true, result: responseContent });
    } catch (error) {
        console.error('Error in /api/openai:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
