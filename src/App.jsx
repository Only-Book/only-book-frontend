import "./App.css";
import Layout from "./components/Layout";
import Join from "./pages/Join";
import Login from "./pages/Login";
import MyBook from "./pages/MyBook";
import OnlyBook from "./pages/OnlyBook";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Layout />

      <Routes>
        <Route path='/' element={<OnlyBook />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/search' element={<Search />} />
        <Route path='/mybook' element={<MyBook />} />
      </Routes>

    </>
  );
}

export default App;
