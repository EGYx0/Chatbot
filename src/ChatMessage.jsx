import styles from "./ChatMessage.module.css";
import robot from "./assets/robot.jpg";
import user from "./assets/user.png";
import dayjs from "dayjs";
function ChatMessage({ message, sender }) {
  const time = dayjs().format("HH:mm A");

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
      <div className={`${styles["chat-message-text"]}`}>
        {message}
        <span className={`${styles.messageTime}`}>{time}</span>
      </div>
      {sender === "user" && (
        <img src={user} className={`${styles["chat-message-profile"]}`} />
      )}
    </div>
  );
}
export default ChatMessage;
