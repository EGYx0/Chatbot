import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "./auth/useAuth";
import { Chatbot } from "supersimpledev";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
function ChatContainer() {
  const { user } = useAuth();
  const [chatMessages, setChatMessages] = useState(() => {
    return JSON.parse(localStorage.getItem("messages")) || [];
  });
  // adding any message you want once....
  useEffect(() => {
    Chatbot.addResponses({
      ahmad: "lala",
      "give me a unique id": function () {
        return `sure here is your id ${crypto.randomUUID()}`;
      },
    });
  }, []);
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);
  return (
    <div className="app-container">
      {chatMessages.length === 0 ? (
        <p>
          Welcome <strong>{user?.username}</strong> to the chatbot project! Send
          a message using the textbox below.
        </p>
      ) : (
        <ChatMessages chatMessages={chatMessages} />
      )}
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default ChatContainer;
