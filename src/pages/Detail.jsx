import styled from "styled-components";

const Detail = () => {
  return (
    <DetailContainer>
      <BookImageContainer>
        <img alt="임시 책 표지" />
      </BookImageContainer>
      <BookDetailContainer>
        <BookInfoContainer>
          <BookName>정의란 무엇인가</BookName>
          <AuthorName>마이클 샌델</AuthorName>
          <DetailStory>
            동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세
            <br />
            무궁화 삼천리 화려강산 대한사람 대한으로 길이 보전하세
            <br />
            남산 위에 저 소나무 철갑을 두른 듯 바람서리 불변함은 우리 기상일세
          </DetailStory>
        </BookInfoContainer>
        <BookRecommend>
          <RecommendNum>30</RecommendNum>
          <RecommendTitle>추천 수</RecommendTitle>
        </BookRecommend>
      </BookDetailContainer>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  display: flex;
`;

const BookImageContainer = styled.div`
  display: flex;
  margin: 5vw;

  img {
    width: 17vw;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const BookDetailContainer = styled.div`
  display: flex;
  padding: 5vw 0;
  width: 60%;
  justify-content: space-between;
`;

const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3vw;
`;

const BookName = styled.p`
  ${({ theme }) => theme.fonts.button};
  color: ${({ theme }) => theme.colors.brown};
  margin: 0%.5 0;
`;

const AuthorName = styled.p`
  ${({ theme }) => theme.fonts.helperText};
  margin: 1vw 0;
`;

const DetailStory = styled.p`
  ${({ theme }) => theme.fonts.helperText};
  color: ${({ theme }) => theme.colors.black};
  opacity: 45%;
  line-height: 140%;
  margin: 1vw 0;
`;

const BookRecommend = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.beige};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const RecommendNum = styled.p`
  ${({ theme }) => theme.fonts.mainTitle};
  color: ${({ theme }) => theme.colors.brown};
  margin-bottom: 2vw;
`;

const RecommendTitle = styled.p`
  ${({ theme }) => theme.fonts.subTitle};
  color: ${({ theme }) => theme.colors.brown};
  margin: 0 3vw;
`;

export default Detail;
