// app/api/evaluate-writing/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error('Missing OpenAI API key');
}

const openai = new OpenAI({
  apiKey: apiKey,
});

export async function POST(req: NextRequest) {
  console.log("Request received at /api/evaluate-writing");

  const { task, passage } = await req.json();
  console.log("Task:", task);
  console.log("Passage:", passage);

  if (!task || !passage) {
    return NextResponse.json({ message: 'Missing task or passage' }, { status: 400 });
  }

  try {
    const prompt = `
      This is a TOEFL writing task ${task}.
      Evaluate the following passage and provide feedback.
      Provide a JSON response with the following format: { "score": number, "feedback": string }.

      Passage: ${passage}
    `;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const evaluation = completion.choices[0]?.message?.content;
    if (!evaluation) {
      throw new Error('No evaluation returned from the API');
    }

    const jsonResponse = JSON.parse(evaluation);

    // Ensure the response is in the correct format
    if (typeof jsonResponse.score !== 'number' || typeof jsonResponse.feedback !== 'string') {
      throw new Error('Invalid evaluation format');
    }

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error('Error in handler:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
