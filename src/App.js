import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { Header } from "./Header/Header";
import { AboutPage } from "../src/page/about/about";
import { DeliveryPage } from "./page/delivery";
import { WoodsPage } from "./page/Woods/Woods";
import { WorkPage } from "./page/work";
import { Contacts } from "./page/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/wood" element={<WoodsPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
