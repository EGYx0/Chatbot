import { useState } from "react";
import "./App.css";
import ProtectedRoute from "./auth/ProtectedRoute";
import Login from "./Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import ChatContainer from "./ChatContainer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <>
            <h1>Hello from home</h1>
            <button
              onClick={() => {
                setIsLoggedIn(true);
                navigate("/chat");
              }}
            >
              Log In
            </button>
          </>
        }
      />
      <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
        <Route path="/chat" element={<ChatContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
