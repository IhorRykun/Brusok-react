import { ContactForm } from "../../ContactForm/ContactForm";
import { Footer } from "../../Footer/Footer";
import { HeaderAbout } from "../../Header/Header";
import { Main } from "./Main/main";
import { Service } from "./service/service";
import { WhyWe } from "./service/WhyWe/WhyWe";

export const AboutPage = () => {
  return (
    <>
      <HeaderAbout />
      <Main />
      <Service />
      <WhyWe />
      <ContactForm />
      <Footer />
    </>
  );
};
