import dayjs from "dayjs";
import styles from "./ChatMessage.module.css";
import robot from "./assets/robot.jpg";
import user from "./assets/user.png";
function ChatMessage({ message, sender, time }) {
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
        <span className={`${styles.messageTime}`}>
          {dayjs(time).format("h:mma")}
        </span>
      </div>
      {sender === "user" && (
        <img src={user} className={`${styles["chat-message-profile"]}`} />
      )}
    </div>
  );
}
export default ChatMessage;
