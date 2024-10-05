import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/InputBox";
import { Axios } from "../api/Axios";

const Join = () => {
  const nav = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleJoin = async () => {
    try {
      const response = await Axios.post(`/auth/signin`, {
        id,
        password,
        nickname,
      });
      console.log("가입 성공:", response.data);
      nav("/genre"); // 가입 후 장르 선택 페이지로 이동
    } catch (error) {
      console.error("가입 실패:", error);
      alert("가입 중 오류가 발생했습니다."); // 오류 처리
    }
  };

  return (
    <JoinContainer>
      <Title>SIGN-UP</Title>
      <WholeContainer>
        <InputBox
          inputText="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <InputBox
          inputText="비밀번호"
          isPassword={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputBox
          inputText="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Button onClick={handleJoin}>다음</Button> {/* 가입 버튼 */}
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

const Title = styled.div`
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
