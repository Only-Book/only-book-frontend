import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";

const Join = () => {
  const [isIdValid, setIsIdValid] = useState(false);
  const [isPwValid, setIsPwValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);

  const validateId = (input) => {
    const idRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{5,10}$/;
    return idRegex.test(input);
  };

  const validPassword = (input) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/;
    return passwordRegex.test(input);
  };

  const validName = (input) => {
    const nameRegex = /^[A-Za-z0-9]{2,10}$/;
    return nameRegex.test(input);
  };

  const isFormValid = isIdValid && isPwValid && isNameValid;

  return (
    <JoinContainer>
      <Title>SIGN-UP</Title>
      <WholeContainer>
        <InputBox
          inputText="아이디"
          explainText="영문과 숫자를 조합하여 5~10글자 미만으로 입력하여 주세요."
          validate={validateId}
          onValidChange={setIsIdValid}
        />
        <InputBox
          inputText="비밀번호"
          explainText="영문과 숫자, 특수기호를 조합하여 8~14글자 미만으로 입력하여 주세요."
          validate={validPassword}
          isPassword={true}
          onValidChange={setIsPwValid}
        />
        <InputBox
          inputText="닉네임"
          explainText="닉네임을 입력하세요."
          validate={validName}
          onValidChange={setIsNameValid}
        />
        {isFormValid ? (
          <Link to="/genre">
            <Button $isFormValid={isFormValid}>다음</Button>
          </Link>
        ) : (
          <Button disabled={!isFormValid}>다음</Button>
        )}
      </WholeContainer>
    </JoinContainer>
  );
};

const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.mainTitle};
  color: ${({ theme }) => theme.colors.brown};
  margin: 0 7vh 7vh;
`;

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.div`
  ${({ theme }) => theme.fonts.heading}
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  width: 9vw;
  min-width: 100px;
  height: 6.5vh;
  min-height: 50px;
  border-radius: 1.08vw;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  background-color: ${({ theme, $isFormValid }) =>
    $isFormValid ? theme.colors.brown : theme.colors.gray};
  cursor: ${({ $isFormValid }) => ($isFormValid ? "pointer" : "not-allowed")};
`;

export default Join;
