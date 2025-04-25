import { Container } from "../../../DivContainer/DivContainer";
import { Title } from "../../../TitleH2/TitleH2.styled";
import {
  Button,
  DivContainerFrom,
  Form,
  FormFlex,
  FormFlexLeft,
  FormFlexRight,
  Input,
  InputCheck,
  Label,
  LabelCheck,
  SectionForm,
  Textarea
} from "./ContactForm,styled";

export const ContactForm = () => {
  return (
    <SectionForm>
      <Container>
        <DivContainerFrom>
          <Title style={{ textAlign: "center" }}>Звʼяжіться з нами</Title>
          <Form action="submit">
            <FormFlex>
              <FormFlexLeft>
                <Label for="usrName">Ім'я</Label>
                <Input
                  type="text"
                  name="name"
                  id="usrName"
                  placeholder="Ваше ім'я"
                />
                <Label for="Email">Email</Label>
                <Input type="Email" id="Email" placeholder="Ваш @Email" />
                <LabelCheck>
                  Я даю згоду на передачу та обробку моїх персональних даних *
                  <InputCheck type="checkbox" />
                </LabelCheck>
                <Button>надіслати</Button>
              </FormFlexLeft>
              <FormFlexRight>
                <Label for="tel">Телефон</Label>
                <Input type="tel" id="tel" placeholder="380" />
                <Label for="userText">Повідмолення</Label>
                <Textarea
                  type="text"
                  id="userText"
                  placeholder="Ваше повідомлення (необовʼязково) "
                />
              </FormFlexRight>
            </FormFlex>
          </Form>
        </DivContainerFrom>
      </Container>
    </SectionForm>
  );
};
