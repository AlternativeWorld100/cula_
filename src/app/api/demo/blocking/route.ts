// POST localhost:3000/api/demo/blocking
import { generateText } from "ai";
import { google } from "@ai-sdk/google";

export async function POST() {
  const response = await generateText({
    model: google('gemini-3-flash-preview'),
      prompt: 'Write a vegetarian lasagna recipe for 4 people.',
      experimental_telemetry: {
      isEnabled: true,
      recordInputs: true,
      recordOutputs: true,
    },
  });

  return Response.json({ response });
};