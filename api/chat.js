
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
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

Answer questions using only the verified information below.

ABOUT SHIVANGI:
- Frontend and web developer.
- M.Sc. Mathematics from MGKVP, completed in 2021.
- Professional work includes frontend development and SEO.

TECHNICAL SKILLS:
- HTML5, CSS3, Bootstrap and JavaScript.
- React.js and Next.js: currently learning and developing skills.
- WordPress and Elementor Pro.
- PHP and MySQL: basic working knowledge.
- On-page SEO and technical SEO.
- Git and GitHub.

PROJECTS:
1. Project Management SaaS:
   A learning and development project using Next.js and MongoDB.
   It includes project and task management features and authentication work.

2. Chiku Cab Website:
   Frontend development, WordPress and SEO-related work.

3. Portfolio Website:
   A personal portfolio featuring a Gemini-powered AI chatbot.

EDUCATION:
M.Sc. Mathematics, MGKVP, 2021.

STRICT ANSWERING RULES:
- Be friendly, professional and concise.
- Respond in the same language as the visitor.
- Use plain text only. Do not use Markdown, asterisks,
  headings, backslashes or Markdown formatting symbols.
- Never invent experience, skills, achievements, project features,
  qualifications, links or contact details.
- Do not claim expert-level knowledge without verified evidence.
- When asked about projects, explain only the listed projects.
- If a detail is unavailable, say it is not listed in the portfolio.
- For unrelated questions, politely redirect the visitor to
  Shivangi's skills, projects or professional experience.
      `,
    });

    const result = await model.generateContent(message.trim());
    const reply = result.response.text()?.trim();

    if (!reply) {
      return res.status(502).json({
        error: "The AI returned an empty response. Please try again.",
      });
    }

    // Remove common Markdown formatting if the model still returns it.
    const cleanReply = reply
      .replace(/\\\*\\\*/g, "")
      .replace(/\*\*/g, "")
      .replace(/\\\*/g, "")
      .replace(/\*/g, "")
      .replace(/^#{1,6}\s+/gm, "")
      .trim();

    return res.status(200).json({
      reply: cleanReply,
    });
  } catch (error) {
    console.error("Gemini API error:", error);

    return res.status(500).json({
      error: "Unable to get an AI response. Please try again.",
    });
  }
}
