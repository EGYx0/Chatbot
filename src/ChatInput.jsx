import { useState } from "react";
import { Chatbot } from "supersimpledev";
import styles from "./ChatInput.module.css";
import loadingImage from "./assets/loading-spinner.gif";
function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    setInputText("");
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);
    setChatMessages([
      ...newChatMessages,

      {
        message: <img src={loadingImage} height="40px" />,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    const response = await Chatbot.getResponseAsync(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  return (
    <div className={`${styles["chat-input-container"]}`}>
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className={`${styles["chat-input"]}`}
      />
      <button onClick={sendMessage} className={`${styles["send-button"]}`}>
        Send
      </button>
    </div>
  );
}
export default ChatInput;
