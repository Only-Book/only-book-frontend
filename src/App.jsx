import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Join from "./pages/Join";
import Login from "./pages/Login";
import MyBook from "./pages/MyBook";
import OnlyBook from "./pages/OnlyBook";
import Search from "./pages/Search";
import Genre from "./pages/Genre";
import ChatBot from "./pages/ChatBot";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<OnlyBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mybook" element={<MyBook />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
