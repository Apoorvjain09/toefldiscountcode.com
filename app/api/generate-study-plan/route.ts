// app/api/generate-study-plan/route.ts
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import 'regenerator-runtime/runtime';

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error('Missing OpenAI API key');
}

const openai = new OpenAI({
  apiKey: apiKey,
});

export async function POST(req: NextRequest) {
  const { testDate, readingScore, listeningScore, writingScore, targetScores, totalTargetScore } = await req.json();

  if (!testDate || readingScore === undefined || listeningScore === undefined || writingScore === undefined) {
    return NextResponse.json({ message: 'Missing required parameters' }, { status: 400 });
  }

  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  try {
    const prompt = `
      You are an AI specialized in TOEFL preparation.
      Based on the following information, generate a detailed and personalized TOEFL study plan:
      - Today's Date: ${today}
      - Test Date: ${testDate}
      - Reading Score: ${readingScore}/3
      - Listening Score: ${listeningScore}/3
      - Writing Score: ${writingScore}/5
      - Target Reading Score: ${targetScores.reading}/30
      - Target Listening Score: ${targetScores.listening}/30
      - Target Speaking Score: ${targetScores.speaking}/30
      - Target Writing Score: ${targetScores.writing}/30
      - Total Target Score: ${totalTargetScore}
      
      The study plan should include daily tasks and tips for each section to improve the scores. Make sure the plan is detailed and spans the time until the test date.
    `;

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1500,
    });

    const studyPlan = completion.choices[0]?.message?.content;
    if (!studyPlan) {
      throw new Error('No study plan returned from the API');
    }

    return NextResponse.json({ studyPlan });
  } catch (error) {
    console.error('Error in handler:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
