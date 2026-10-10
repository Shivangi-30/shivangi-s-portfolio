
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error: "AI service is not configured",
    });
  }

  try {
    const { message } = req.body ?? {};

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "Please enter a message",
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        error: "Message is too long",
      });
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      instructions: `
        You are Shivangi Gupta's portfolio AI assistant.
        Answer recruiters' questions about her portfolio,
        frontend development, React, Next.js, PHP, MySQL,
        WordPress, and SEO skills.

        Be friendly, professional, and concise.
        Never invent work experience, qualifications,
        achievements, or project details.
        If information is unavailable, say so clearly.
      `,
      input: message.trim(),
      max_output_tokens: 300,
    });

    return res.status(200).json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error("AI API error:", error.message);

    return res.status(500).json({
      error: "Unable to get an AI response. Please try again.",
    });
  }
}
