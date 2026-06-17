import { useState, useEffect, useRef } from "react";
import { SendHorizontal } from "lucide-react";

interface Message {
    id: number;
    role: "user" | "assistant";
    content: string;
}

const randomReplies = [
    "Interesting question!",
    "Can you explain more?",
    "That's a good point.",
    "I agree with that.",
    "Let me think about it.",
    "Here's another perspective.",
];

export default function Chat() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            role: "assistant",
            content: "Hello! How can I help you?",
        },
    ]);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now(),
            role: "user",
            content: input,
        };

        const thinkingMessage: Message = {
            id: Date.now() + 1,
            role: "assistant",
            content: "Thinking...",
        };

        // Add user message and thinking message
        setMessages((prev) => [...prev, userMessage, thinkingMessage]);

        setInput("");

        // Simulate backend response
        setTimeout(() => {
            const reply =
                randomReplies[Math.floor(Math.random() * randomReplies.length)];

            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === thinkingMessage.id
                        ? {
                            ...msg,
                            content: reply,
                        }
                        : msg
                )
            );
        }, 1500);
    };

    return (
        <div className="flex flex-col h-screen md:h-full bg-zinc-950 rounded-xl overflow-hidden">

            {/* Header */}
            <div className="border-b border-zinc-800 px-5 py-4">
                <h1 className="font-bold text-lg">Chat</h1>
            </div>

            {/* Scrollable Messages */}
            <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.role === "user"
                            ? "justify-end"
                            : "justify-start"
                            }`}
                    >
                        <div
                            className={`max-w-[75%] px-4 py-3 rounded-2xl break-words ${message.role === "user"
                                ? "bg-blue-600 rounded-br-md"
                                : "bg-zinc-800 rounded-bl-md"
                                }`}
                        >
                            {message.content}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input area fixed at bottom */}
            <div className="border-t border-zinc-800 p-4 bg-zinc-950">
                <div className="flex gap-3">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={input}
                        className="flex-1 rounded-xl bg-zinc-900 px-4 py-3 outline-none"
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                sendMessage();
                            }
                        }}
                    />

                    <button
                        onClick={sendMessage}
                        className="rounded-xl bg-blue-600 px-4 hover:bg-blue-700 transition"
                    >
                        <SendHorizontal size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}