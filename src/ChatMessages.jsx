import { useAutoScroll } from "./hooks/useAutoScroll";
import styles from "./ChatMessages.module.css";
import ChatMessage from "./ChatMessage";
function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll(chatMessages);

  return (
    <div
      className={`${styles["chat-messages-container"]}`}
      ref={chatMessagesRef}
    >
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
            time={chatMessage.time}
          />
        );
      })}
    </div>
  );
}
export default ChatMessages;
