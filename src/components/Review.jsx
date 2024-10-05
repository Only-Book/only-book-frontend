import styled from "styled-components";

const Review = () => {
  return (
    <ReviewContainer>
      <TextContainer>
        <Title>유저 이름</Title>
        <UserName>누구</UserName>
      </TextContainer>
      <DivisionLine />
      <Title>감상평</Title>
      <ReviewText>어쩌구저쩌구</ReviewText>
    </ReviewContainer>
  );
};

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.4vw;
  width: 83.75vw;
  min-height: 16.94vh;
  background-color: ${({ theme }) => theme.colors.beige};
  border-radius: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.subTitle};
  color: ${({ theme }) => theme.colors.brown};
  margin: 1vw;
`;

const UserName = styled.p`
  ${({ theme }) => theme.fonts.helperText};
  color: ${({ theme }) => theme.colors.brown};
`;

const DivisionLine = styled.div`
  width: 80.486vw;
  height: 0;
  border: 1px solid ${({ theme }) => theme.colors.brown};
`;

const ReviewText = styled.p`
  ${({ theme }) => theme.fonts.helperText};
  color: ${({ theme }) => theme.colors.brown};
  margin: 0 15px;
`;

export default Review;
