import { ContactForm } from "../../ContactForm/ContactForm";
import { Footer } from "../../Footer/Footer";
import { HeaderWood } from "./Header/Header";
import { Main } from "./Header/Main/Main";

export const WoodsPage = ({
  toggleBoard,
  toggleGirder,
  toggleLath,
  toggleLining,
  showBasket
}) => {
  return (
    <>
      <HeaderWood showBasket={showBasket} />
      <Main
        toggleBoard={toggleBoard}
        toggleGirder={toggleGirder}
        toggleLath={toggleLath}
        toggleLining={toggleLining}
      />
      <ContactForm />
      <Footer />
    </>
  );
};
