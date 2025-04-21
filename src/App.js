import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Header/Header";
import { AboutPage } from "../src/page/about/about";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
