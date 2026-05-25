import { useState } from "react";
import "./App.css";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import ChatMessages from "./ChatMessages";
function App() {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <div className="app-container">
      {chatMessages.length === 0 ? (
        <p>
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      ) : (
        <ChatMessages chatMessages={chatMessages} />
      )}
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <dotlottie-player
        src="your-animation.lottie"
        autoplay
        loop
        style={{ width: "200px", height: "200px" }}
      ></dotlottie-player>
    </div>
  );
}

export default App;
