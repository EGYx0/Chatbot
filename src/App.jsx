import "./App.css";
import ProtectedRoute from "./auth/ProtectedRoute";
import Login from "./Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import ChatContainer from "./ChatContainer";

function App() {
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
                navigate("/chat");
              }}
            >
              Log In
            </button>
          </>
        }
      />
      <Route element={<ProtectedRoute />}>
        <Route path="/chat" element={<ChatContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
