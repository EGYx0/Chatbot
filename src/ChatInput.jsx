import { useState } from "react";
import { Chatbot } from "supersimpledev";
import styles from "./ChatInput.module.css";
import loadingImage from "./assets/loading-spinner.gif";
import dayjs from "dayjs";
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
        time: dayjs().valueOf(),
      },
    ];

    setChatMessages(newChatMessages);
    setChatMessages([
      ...newChatMessages,

      {
        message: <img src={loadingImage} height="40px" />,
        sender: "robot",
        id: crypto.randomUUID(),
        time: dayjs().valueOf(),
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

  function clearMessages() {
    setChatMessages([]);
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
      <button onClick={clearMessages}>Clear</button>
    </div>
  );
}
export default ChatInput;
