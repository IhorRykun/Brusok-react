import { Footer } from "../../Footer/Footer";
import { ContactForm } from "./ContactForm/ContactForm";
import { Main } from "./Main/main";
import { Service } from "./service/service";
import { WheWe } from "./service/WhyWe/WhyWe";

export const AboutPage = () => {
  return (
    <>
      <Main />
      <Service />
      <WheWe />
      <ContactForm />
      <Footer />
    </>
  );
};
