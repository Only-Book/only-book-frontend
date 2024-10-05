import styled from "styled-components";

const Login = () => {
  return <LoginContainer />;
};

const LoginContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.brown};
`;

export default Login;
