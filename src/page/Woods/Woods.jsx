import { ContactForm } from "../../ContactForm/ContactForm";
import { Footer } from "../../Footer/Footer";
import { HeaderWood } from "./Header/Header";
import { Main } from "./Header/Main/Main";

export const WoodsPage = ({ onClick }) => {
  return (
    <>
      <HeaderWood />
      <Main onClick={onClick} />
      <ContactForm />
      <Footer />
    </>
  );
};
