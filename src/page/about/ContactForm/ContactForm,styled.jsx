import styled from "@emotion/styled";

export const SectionForm = styled.section`
  padding-top: 98px;
`;

export const DivContainerFrom = styled.div`
  border: 1px solid black;
  border-radius: 70px;
  padding: 30px;
`;

export const Form = styled.form`
  margin-top: 20px;
`;

export const FormFlex = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const FormFlexLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const FormFlexRight = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 451px;
  font-weight: 300px;
  font-size: 13px;
  padding: 13px;
  /* border-radius: 20px; */
  margin-bottom: 54px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  border-bottom: 1px solid black;

  &:hover,
  &:focus {
    border: none;
    outline: 2px solid #d9ac8d;
    border-radius: 20px;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover.Label,
  &:focus.Label {
    color: red;
  }
`;

export const Label = styled.label`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 10px;
  padding-left: 8px;
  cursor: pointer;
`;

export const Textarea = styled.textarea`
  width: 451px;
  font-weight: 300px;
  font-size: 13px;
  padding: 25px 13px 25px 13px;
  /* border-radius: 20px; */
  resize: none;
  border: none;
  border-bottom: 1px solid black;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border: none;
    outline: 1px solid #d9ac8d;
    border-radius: 25px;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const InputCheck = styled.input`
  cursor: pointer;
  color: rgba(0, 0, 0, 1);
  width: 17px;
  height: 17px;
  position: absolute;
  top: -1px;
  left: -30px;
`;

export const LabelCheck = styled.label`
  position: relative;
  margin-left: 28px;
  font-size: 14px;
  cursor: pointer;
`;

export const Button = styled.button`
  border: 1px solid black;
  width: 113px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 24px;
  background-color: transparent;
  padding: 8px 15px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid #d9ac8d;
    outline: none;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
