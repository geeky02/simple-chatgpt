import { Message } from "@/types";
import Image from "next/image";
import { FC } from "react";
interface Props {
  message: Message;
}

export const ChatMessage: FC<Props> = ({ message }) => {
  return (
    <div className={`flex flex-col ${message.role === "assistant" ? "items-start" : "items-end"}`}>
      <div
        className={`flex items-center ${message.role === "assistant" ? "bg-neutral-200 text-neutral-900" : "bg-blue-500 text-white"} rounded-2xl px-3 py-2 max-w-[67%] whitespace-pre-wrap`}
        style={{ overflowWrap: "anywhere" }}
      >
        {message.role === "assistant" && (
          <Image
            width={40}
            height={40}
            alt="chatbotlogo"
            className="text-white rounded-full"
            src="/bot.png"
          />
        )}
        
        {message.content}
        {message.role !== "assistant" && (
          <Image
            width={40}
            height={40}
            alt="chatbotlogo"
            className="text-white rounded-full"
            src="/user.png"
          />
        )}
        
      </div>
    </div>
  );
};
