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
  console.log("Request received at /api/evaluate-speaking");

  const { question, transcript } = await req.json();
  console.log("question:", question);
  console.log("transcript:", transcript);

  if (!question || !transcript) {
    return NextResponse.json({ message: 'Missing question or transcript' }, { status: 400 });
  }

  try {
    const prompt = `
        You are a TOEFL evaluator.
        Question: '${question}'
        Answer Transcript: '${transcript}'
        
        HOW SCORING WILL BE DONE:
        4: The response fulfills the demands of the task. Minimum 100 words.
        3: The response addresses the task appropriately but may fall short of being fully developed. Minimum 80 words.
        2: Speech is basically intelligible, though listener effort is needed because of unclear articulation. Minimum 40 words.
        1: Little relevant content from the lecture. Errors make it hard to understand.
        0: Copies from the reading, off-topic, foreign language, or blank.
        
        Please evaluate the transcript based on the question and provide a score(0-4) and feedback in a JSON response with the following format: { "score": number, "feedback": string }. 
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
