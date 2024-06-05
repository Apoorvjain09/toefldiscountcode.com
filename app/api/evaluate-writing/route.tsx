// app/api/evaluate-writing/route.ts
import { writingQuestions } from '@/app/tests/1/questions';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import 'regenerator-runtime/runtime';  // Import regenerator-runtime

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
  console.log(writingQuestions.task1.passage)

  if (!task || !passage) {
    return NextResponse.json({ message: 'Missing task or passage' }, { status: 400 });
  }

  try {
    let prompt;
    if (task === 1) {
      prompt = `
      You are a toelf test evaluator.
      You are checking TOEFL writing task ${task}.
      The Question Passage is '${writingQuestions.task1.passage}'
      Evaluate the following passage based on the criteria below and provide a score (0-5) with feedback:
      Answer Passage: '${passage}'
      
      HOW SCORING WILL BE DONE:
      5: Accurately presents key info from the lecture in relation to the reading. Well-organized, minor errors. Typically is between 150-225 words.
      4: Good with minor omissions or inaccuracies. More frequent errors but still clear.
      3: Contains key info but vague or unclear connections. May omit a major point.
      2: Significant omissions or inaccuracies. Errors obscure meaning.
      1: Little relevant content from the lecture. Errors make it hard to understand.
      0: Copies from the reading, off-topic, foreign language, or blank.
      
      Provide a JSON response with the following format: { "score": number, "feedback": string }.
    `;
    } else if (task === 2) {
      prompt = `
      You are a toelf test evaluator.
      You are checking TOEFL writing task ${task}.
      The Conversation is '${writingQuestions.task2.conversation}'
      Evaluate the following conversation answer based on the criteria below and provide a score (0-5) with feedback:
      Answer Passage: '${passage}'
      
      HOW SCORING WILL BE DONE:
      5: Clear, relevant, well-organized with detailed examples. Few errors.
      4: Relevant and clear but with minor errors.
      3: Mostly relevant but with missing or unclear parts. Noticeable errors.
      2: Partially relevant with limited structure. Accumulation of errors.
      1: Few coherent ideas. Frequent serious errors.
      0: Off-topic, not in English, copied, or blank.

      Provide a JSON response with the following format: { "score": number, "feedback": string }.
    `;
    } else {

      return NextResponse.json({ message: 'Invalid task' }, { status: 400 });
    }

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
