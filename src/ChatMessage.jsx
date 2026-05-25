import styles from "./ChatMessage.module.css";
import robot from "./assets/robot.jpg";
import user from "./assets/user.png";
function ChatMessage({ message, sender }) {
  return (
    <div
      className={
        sender === "user"
          ? `${styles["chat-message-user"]}`
          : `${styles["chat-message-robot"]}`
      }
    >
      {sender === "robot" && (
        <img src={robot} className={`${styles["chat-message-profile"]}`} />
      )}
      <div className={`${styles["chat-message-text"]}`}>{message}</div>
      {sender === "user" && (
        <img src={user} className={`${styles["chat-message-profile"]}`} />
      )}
    </div>
  );
}
export default ChatMessage;
