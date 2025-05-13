import { Footer } from "../Footer/Footer";
import { HeaderWood } from "./Woods/Header/Header";

export const DeliveryPage = ({ showBasket }) => {
  return (
    <>
      <HeaderWood showBasket={showBasket} />
      <h2>delivery</h2>;
      <Footer />
    </>
  );
};
