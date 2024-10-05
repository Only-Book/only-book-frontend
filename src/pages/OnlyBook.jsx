import styled from "styled-components";

const OnlyBook = () => {
  return (
  <OnlyBookContainer>
    <TextContainer>
      <SmallText>피곤한 당신에게 필요한 책은?</SmallText>
      <MainText>힐링이 필요할 때 읽을 책을 추천해줘!</MainText>
      <SubText>심심한 주말, 책과 함께 하고 싶다면?</SubText>
      <AskButton>갈릭봇에게 질문하기</AskButton>
    </TextContainer>
  </OnlyBookContainer>
  );
};

const OnlyBookContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.beige};
  align-items: center;
  padding: 30px;
  display: flex;
  height: 400px;
`;

const TextContainer = styled.div`
  color: ${({ theme }) => theme.colors.brown};
  flex: 1;
  padding: 30px;
`;

const SmallText = styled.p`
  font-size: 30px;
  color: #8B6A5E;
  margin-bottom: 55px;
  margin-left: 150px;
`;

const MainText = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SubText = styled.p`
  font-size: 25px;
  color: #B9A89A;
  margin-bottom: 20px;
  margin-right: 40px;
  display: flex;
  justify-content: flex-end;
`;

const AskButton = styled.button`
  background-color: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 22px;
  height: 65px;
  width: 290px;
  margin-top: 25px;
  margin-left: 1000px;
`;

export default OnlyBook;
