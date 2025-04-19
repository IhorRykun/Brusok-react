import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./page/Home";
import { Header } from "./Header/Header";
import { AboutPage } from "./page/about";

function App() {
  return (
    <>
      <Header></Header>
      <Routes >
        <Route path="/" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
