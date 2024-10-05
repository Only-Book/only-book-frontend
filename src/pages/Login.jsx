import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import { Axios } from "../api/Axios";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await Axios.post(`/auth/login`, {
        id,
        password,
      });
      console.log("로그인 응답:", response.data);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } catch (error) {
      console.error("로그인 실패", error);
    }
  };

  return (
    <LoginContainer>
      <WholeContainer>
        <Title>LOGIN</Title>
        <LoginBox>
          <InputBox
            inputText="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <InputBox
            inputText="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isPassword={true}
          />
          <ButtonContainer>
            <Button onClick={handleLogin}>로그인</Button>

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
  background-color: ${({ theme }) => theme.colors.brown};
`;

const JoinButton = styled.p`
  ${({ theme }) => theme.fonts.subText};
  color: #8e8e8e;
  margin: 30px 20px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.brown};
  }
`;

export default Login;
