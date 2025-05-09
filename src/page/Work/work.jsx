import { ContactForm } from "../../ContactForm/ContactForm";
import { Footer } from "../../Footer/Footer";
import { HeaderWood } from "../../page/Woods/Header/Header";

import { MainWork } from "./MainWork/MainWork";
import { Service } from "./Service/Service";

export const WorkPage = () => {
  return (
    <>
      <HeaderWood />
      <MainWork />
      <Service />
      <ContactForm />
      <Footer />
    </>
  );
};
