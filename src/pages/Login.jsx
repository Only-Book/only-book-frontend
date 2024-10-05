import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import InputBox from "../components/InputBox";

const Login = () => {
  const [isIdValid, setIsIdValid] = useState(false);
  const [isPwValid, setIsPwValid] = useState(false);

  const validateId = (input) => {
    const idRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{5,10}$/;
    return idRegex.test(input);
  };

  const validPassword = (input) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/;
    return passwordRegex.test(input);
  };

  const isFormValid = isIdValid && isPwValid;

  return (
    <LoginContainer>
      <WholeContainer>
        <Title>LOGIN</Title>
        <LoginBox>
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
          <ButtonContainer>
            <Button isFormValid={isFormValid}>로그인</Button>
            <Link to="/join">
              <JoinButton>회원가입</JoinButton>
            </Link>
          </ButtonContainer>
        </LoginBox>
      </WholeContainer>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.mainTitle};
  color: ${({ theme }) => theme.colors.brown};
  margin: 0 7vh 7vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Button = styled.div`
  ${({ theme }) => theme.fonts.heading}
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  width: 45vw;
  min-width: 100px;
  height: 8vh;
  min-height: 50px;
  border-radius: 1.08vw;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  background-color: ${({ theme, isFormValid }) =>
    isFormValid ? theme.colors.brown : theme.colors.gray};
`;

const JoinButton = styled.p`
  ${({ theme }) => theme.fonts.subText};
  color: #8e8e8e;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`;

export default Login;
