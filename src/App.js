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
import { Girder } from "./page/Woods/Header/Main/Girder/Girder";
import { Lath } from "./page/Woods/Header/Main/Lath/Lath";
import { Lining } from "./page/Woods/Header/Main/Lining/Lining";

function App() {
  const [showModalBoard, setShowModalBoard] = useState(false);
  const [showModalGirder, setShowModalGirder] = useState(false);
  const [showModalLath, setShowModalLath] = useState(false);
  const [showModalLining, setShowModalLining] = useState(false);
  const [showBasket, setShowBasket] = useState(false);

  const toggleBoard = () => {
    setShowModalBoard(!showModalBoard);
  };

  const toggleGirder = () => {
    setShowModalGirder(!showModalGirder);
  };
  const toggleLath = () => {
    setShowModalLath(!showModalLath);
  };
  const toggleLining = () => {
    setShowModalLining(!showModalLining);
  };
  const toggleBasket = () => {
    setShowBasket(!showBasket);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route
          path="/wood"
          element={
            <WoodsPage
              toggleBoard={toggleBoard}
              toggleGirder={toggleGirder}
              toggleLath={toggleLath}
              toggleLining={toggleLining}
              showBasket={toggleBasket}
            />
          }
        />
        <Route path="/work" element={<WorkPage showBasket={toggleBasket} />} />
        <Route
          path="/delivery"
          element={<DeliveryPage showBasket={toggleBasket} />}
        />
        <Route
          path="/contacts"
          element={<Contacts showBasket={toggleBasket} />}
        />
      </Routes>

      <Modal isClose={toggleBoard} isOpen={showModalBoard}>
        <Board />
      </Modal>
      <Modal isClose={toggleGirder} isOpen={showModalGirder}>
        <Girder />
      </Modal>
      <Modal isClose={toggleLath} isOpen={showModalLath}>
        <Lath />
      </Modal>
      <Modal isClose={toggleLining} isOpen={showModalLining}>
        <Lining />
      </Modal>
      <Modal isClose={toggleBasket} isOpen={showBasket}>
        <h2>Basket</h2>
      </Modal>
    </>
  );
}

export default App;
