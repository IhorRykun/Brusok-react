import { Container } from "../../../DivContainer/div.styled";
import { Title } from "../../../TitleH2/TitleH2.styled";
import {
  DivContainerFrom,
  Input,
  Label,
  SectionForm
} from "./ContactForm,styled";

export const ContactForm = () => {
  return (
    <SectionForm>
      <Container>
        <DivContainerFrom>
          <Title style={{ textAlign: "center" }}>Звʼяжіться з нами</Title>
          <form action="submit">
            <Label for="usrName">
              Ім'я
              <Input type="text" name="name" id="usrName" />
            </Label>
            <Label for="Email">
              Email
              <Input type="Email" id="Email" />
            </Label>
            <Label for="tel">
              Телефон
              <Input type="tel" id="tel" />
            </Label>
            <Label for="userText">
              повідмолення
              <textarea style={{ resize: "none" }} type="text" id="userText" />
            </Label>
            <button>надіслати</button>
          </form>
        </DivContainerFrom>
      </Container>
    </SectionForm>
  );
};
