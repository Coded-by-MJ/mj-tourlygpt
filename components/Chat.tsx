"use client";

import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import {
  fetchUserTokensById,
  generateChatResponse,
  subtractTokens,
} from "../utils/action";
import { ChatMessage } from "../utils/types";
import { useAuth } from "@clerk/nextjs";
function Chat() {
  const { userId } = useAuth();
  const [text, setText] = useState("");

  const [messages, setMessages] = useState<Array<ChatMessage>>([]);
  const { mutate, isPending } = useMutation({
    mutationFn: async (query: ChatMessage) => {
      const currentTokens = await fetchUserTokensById(userId);
      if (currentTokens < 100) {
        toast.error("Token balance too low...");
        return;
      }
      const aiResponse = await generateChatResponse([...messages, query]);
      if (!aiResponse) {
        toast.error("Something went wrong");
        return;
      }
      const newTokens = await subtractTokens(userId, aiResponse.tokens);
      setMessages((prev) => [...prev, aiResponse.message]);
      toast.success(`${newTokens} tokens remaining...`);
    },
  });
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query: ChatMessage = { role: "user", content: text };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] max-w-[800px] w-full grid grid-rows-[1fr_auto]">
      <div className="w-full">
        {messages.map(({ role, content }, index) => {
          const avatar = role == "user" ? "👤" : "🤖";
          const bcg = role == "user" ? "bg-base-200" : "bg-base-100";
          return (
            <div
              key={index}
              className={` ${bcg} w-full flex py-6 -mx-8 px-8
               text-xl leading-loose border-b border-base-300`}
            >
              <span className="mr-4 ">{avatar}</span>
              <p className="max-w-3xl">{content}</p>
            </div>
          );
        })}
        {isPending && <span className="loading loading-dots loading-lg"></span>}
      </div>
      <form onSubmit={handleSubmit} className="w-full pt-12">
        <div className="join w-full">
          <input
            type="text"
            placeholder="Message TourlyGPT"
            className="input input-bordered join-item w-full"
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
          <button
            disabled={isPending}
            className="btn btn-primary join-item"
            type="submit"
          >
            {isPending ? "please wait..." : "ask questions"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default Chat;
