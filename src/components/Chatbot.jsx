
import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! 👋 I am Shivangi's AI assistant. Ask me about her projects and skills.",
    },
  ]);
const suggestedQuestions = [
  "Tell me about Shivangi",
  "Show me her projects",
  "What are her technical skills?",
  "Tell me about her SEO experience",
];
  async function handleSend(e) {
    e.preventDefault();

    const text = message.trim();

    if (!text || isLoading) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text },
    ]);

    setMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: text }),
      });

      // Read response as text first to handle empty responses safely.
      const responseText = await response.text();

      if (!responseText.trim()) {
        throw new Error(
          `API returned an empty response (HTTP ${response.status}).`
        );
      }

      let data;

      try {
        data = JSON.parse(responseText);
      } catch {
        throw new Error(
          `API returned invalid JSON (HTTP ${response.status}). Check the API endpoint.`
        );
      }

      if (!response.ok) {
        throw new Error(
          data.error || `Request failed (HTTP ${response.status}).`
        );
      }

      if (typeof data.reply !== "string" || !data.reply.trim()) {
        throw new Error("The AI returned an empty reply. Please try again.");
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply },
      ]);
    } catch (error) {
      console.error("Chatbot error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            error.message ||
            "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <section className="mb-4 flex h-[440px] w-[min(350px,calc(100vw-2rem))] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl animate-[chatEnter_0.25s_ease-out]">
          <header className="flex items-center justify-between bg-blue-600 p-4 text-white">
            <div className="flex items-center gap-3">
              <img
                src="/images/shivangi-avatar.png"
                alt="Shivangi Gupta"
                className="h-11 w-11 rounded-full border-2 border-white/70 object-cover"
              />

              <div>
                <h2 className="font-semibold">
                  Shivangi AI Assistant
                </h2>
                <p className="text-xs text-blue-100">
                  Here to help you
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-2 text-2xl hover:bg-blue-700"
              aria-label="Close chatbot"
            >
              ×
            </button>
          </header>

          <div className="flex flex-1 flex-col gap-3 overflow-y-auto bg-gray-50 p-4">
            {messages.map((item, index) => (
              <div
                key={index}
                className={`max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-3 py-2 text-sm ${
                  item.role === "user"
                    ? "self-end rounded-br-sm bg-blue-600 text-white"
                    : "self-start rounded-bl-sm border border-gray-200 bg-white text-gray-800"
                }`}
              >
                {item.text}
              </div>
            ))}

            {isLoading && (
              <div className="self-start rounded-2xl bg-white px-4 py-3 text-sm text-gray-500">
                <span className="animate-pulse">
                  AI is thinking...
                </span>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSend}
            className="flex gap-2 border-t border-gray-200 bg-white p-3"
          >
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me something..."
              maxLength={1000}
              disabled={isLoading}
              className="min-w-0 flex-1 rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100"
            />

            <button
              type="submit"
              disabled={!message.trim() || isLoading}
              className="rounded-xl bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send message"
            >
              ↑
            </button>
          </form>
        </section>
      )}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
          className="group relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.45)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] motion-safe:animate-[float_3s_ease-in-out_infinite]"
        >
          {isOpen ? (
            <span className="text-3xl text-white">×</span>
          ) : (
            <img
              src="/images/shivangi-avatar.png"
              alt="Shivangi Gupta"
              className="h-full w-full rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          )}

          {!isOpen && (
            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
          )}
        </button>
      </div>
    </div>
  );
}
