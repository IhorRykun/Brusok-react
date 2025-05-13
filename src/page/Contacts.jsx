import { ContactForm } from "../ContactForm/ContactForm";
import { Footer } from "../Footer/Footer";
import { HeaderWood } from "./Woods/Header/Header";

export const Contacts = ({ showBasket }) => {
  return (
    <>
      <HeaderWood showBasket={showBasket} />
      <h2>Контактна інформація </h2>

      <ContactForm />
      <Footer />
    </>
  );
};
