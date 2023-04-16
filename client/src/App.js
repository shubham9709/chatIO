import "./App.css";
import { Route, Routes } from "react-router-dom";
import Join from "./components/Join";
import Chats from "./components/Chats";
import HomePage from "./components/Homepage/HomePage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </div>
  );
}

export default App;
