import styled from "styled-components";

const Review = () => {
  return (
    <ReviewContainer>
      <TextContainer>
        <Title>김지예</Title>
      </TextContainer>
      <DivisionLine />
      <Title>감상평</Title>
      <ReviewText>이 책을 읽고 정말 많은 도움이 되었어요. 돈을 관리하는 방법을 배울 수 있었습니다!</ReviewText>
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
