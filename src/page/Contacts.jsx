import { ContactForm } from "../ContactForm/ContactForm";
import { Footer } from "../Footer/Footer";
import { HeaderWood } from "./Woods/Header/Header";

export const Contacts = () => {
  return (
    <>
      <HeaderWood />
      <h2>Контактна інформація </h2>

      <ContactForm />
      <Footer />
    </>
  );
};
