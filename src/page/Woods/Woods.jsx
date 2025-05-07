import { Footer } from "../../Footer/Footer";
import { ContactForm } from "../about/ContactForm/ContactForm";
import { HeaderWood } from "./Header/Header";
import { Main } from "./Header/Main/Main";

export const WoodsPage = () => {
  return (
    <>
      <HeaderWood />
      <Main />
      <ContactForm />
      <Footer />
    </>
  );
};
