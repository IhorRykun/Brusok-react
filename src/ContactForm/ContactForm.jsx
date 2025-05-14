import { useState } from "react";
import { Container } from "../DivContainer/DivContainer";
import {
  Button,
  DivContainerFrom,
  FormFlex,
  FormFlexLeft,
  FormFlexRight,
  Input,
  InputCheck,
  Label,
  LabelCheck,
  SectionForm,
  Textarea,
  Title,
  ValidationLeftTop,
  ValidationRightBottom,
  ValidationRightTop
} from "./ContactForm.styled";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  name: "",
  tel: "",
  userText: "",
  toggle: ""
};

const schema = Yup.object().shape({
  email: Yup.string().email().required("Заопвніть будь ласка поле!").trim(),
  name: Yup.string().required("Заопвніть будь ласка поле!").trim(),
  tel: Yup.number()
    .required("Заопвніть будь ласка поле!")
    .min(9, "Не коректне значення"),
  userText: Yup.string().required("Заопвніть будь ласка поле!").trim()
});

export const ContactForm = () => {
  const [togle, setTogle] = useState(false);

  const OnSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };

  return (
    <SectionForm>
      <Container>
        <DivContainerFrom>
          <Title style={{ textAlign: "center" }}>Звʼяжіться з нами</Title>
          <Formik
            initialValues={initialValues}
            onSubmit={OnSubmit}
            validationSchema={schema}>
            <Form autoComplete="off" action="submit">
              <FormFlex>
                <FormFlexLeft>
                  <Label htmlFor="usrName">Ім'я</Label>
                  <Input
                    type="text"
                    name="name"
                    id="usrName"
                    placeholder="Ваше ім'я"
                  />
                  <ErrorMessage component={ValidationLeftTop} name="name" />
                  <Label htmlFor="Email">Email</Label>
                  <Input
                    type="Email"
                    id="Email"
                    name="email"
                    placeholder="Ваш @Email"
                  />
                  <ErrorMessage
                    component={ValidationRightBottom}
                    name="email"
                  />
                  <LabelCheck>
                    Я даю згоду на передачу та обробку моїх персональних даних *
                    <InputCheck type="checkbox" name="toggle" />
                    <ErrorMessage name="toggle" />
                  </LabelCheck>
                  <Button disabled="true" type="submit">
                    надіслати
                  </Button>
                </FormFlexLeft>
                <FormFlexRight>
                  <Label htmlFor="tel">Телефон</Label>
                  <Input type="tel" id="tel" name="tel" placeholder="097" />
                  <ErrorMessage component={ValidationRightTop} name="tel" />

                  <Label htmlFor="userText">Повідмолення</Label>
                  <Textarea
                    id="userText"
                    type="text"
                    name="userText"
                    placeholder="Ваше повідомлення (необовʼязково)"
                  />
                  <ErrorMessage
                    render={(message) => (
                      <ValidationRightBottom>{message}</ValidationRightBottom>
                    )}
                    name="userText"
                  />
                </FormFlexRight>
              </FormFlex>
            </Form>
          </Formik>
        </DivContainerFrom>
      </Container>
    </SectionForm>
  );
};
