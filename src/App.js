import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Header/Header";
import { AboutPage } from "../src/page/about/about";
import { DeliveryPage } from "./page/delivery";
import { WoodsPage } from "./page/woods";
import { WorkPage } from "./page/work";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/wood" element={<WoodsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="delivery" element={<DeliveryPage />} />
      </Routes>
    </>
  );
}

export default App;
