
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({
      error: "Gemini API is not configured",
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

    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY
    );

    const model = genAI.getGenerativeModel({
      model: "gemini-3.6-flash",
      systemInstruction: `
        You are Shivangi Gupta's portfolio AI assistant.
        Answer questions about her portfolio, projects, frontend development,
        React, Next.js, PHP, MySQL, WordPress, and SEO skills.
        Be friendly, professional, and concise.
        Never invent experience or qualifications.
        If information is unavailable, say so clearly.
      `,
    });

    const result = await model.generateContent(message.trim());
    const reply = result.response.text();

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Gemini API error details:", error);

    return res.status(500).json({
      error: "Unable to get an AI response. Please try again.",
    });
  }
}
