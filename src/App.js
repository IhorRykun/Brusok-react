import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { Header } from "./Header/Header";
import { AboutPage } from "../src/page/about/about";
import { DeliveryPage } from "./page/delivery";
import { WoodsPage } from "./page/Woods/Woods";
import { Contacts } from "./page/Contacts";
import { WorkPage } from "./page/Work/work";
import { Modal } from "./Modal/Modal";
import { useState } from "react";
import { Board } from "./page/Woods/Header/Main/Board/Board";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);

  const toggleOne = () => {
    setShowModal(!showModal);
  };
  

  return (
    <>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/wood" element={<WoodsPage onClick={toggleOne} />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Modal isClose={toggleOne} isOpen={showModal}>
        <Board />
      </Modal>
      <Modal isClose={toggleOne} isOpen={showModalTwo}>
        <h2>Two</h2>
      </Modal>
    </>
  );
}

export default App;
