import styled from "styled-components";
import searchIcon from "../image/search.svg";

const LongBook = () => {
  return (
  <LongBookContainer>
    <TitleContainer>
      멋사님의 책장
    </TitleContainer>
    <BookItem>
      <ImgContainer>
        <img src={searchIcon} alt="검색" />
      </ImgContainer>
      <ContentBox>
        <TextContainer>책 이름</TextContainer>
        <Separator />
        <TextContainer>감상평</TextContainer>
      </ContentBox>
    </BookItem>
    <BookItem>
      <ImgContainer>
        <img src={searchIcon} alt="검색" />
      </ImgContainer>
      <ContentBox>
        <TextContainer>책 이름</TextContainer>
        <Separator />
        <TextContainer>감상평</TextContainer>
      </ContentBox>
    </BookItem>
    <BookItem>
      <ImgContainer>
        <img src={searchIcon} alt="검색" />
      </ImgContainer>
      <ContentBox>
        <TextContainer>책 이름</TextContainer>
        <Separator />
        <TextContainer>감상평</TextContainer>
      </ContentBox>
    </BookItem>
  </LongBookContainer>
  );
};

const LongBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.colors.brown};
  margin: 0px;
`;

const TitleContainer = styled.div`
  display: flex;
  margin: 50px;
  ${({theme})=>theme.fonts.button};
`

const ContentBox = styled.div`
  height: 300px;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

const TextContainer = styled.div`
  display: flex;
  margin: 20px;
  ${({theme})=>theme.fonts.subBoldText};
  text-align: start;
`
const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.brown};
  margin: 10px 0;
`;

const BookItem = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;
  margin: 0px 50px 50px 50px;
  background: ${({ theme }) => theme.colors.beige};
  border: 3px solid ${({ theme }) => theme.colors.brown};
  border-radius: 10px;
`;

const ImgContainer = styled.div`
  height: 300px;
  width: 200px;
  background: ${({theme})=>theme.colors.brown};
  border-radius: 10px;
  `

export default LongBook;
