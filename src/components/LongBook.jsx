import styled from "styled-components";
import searchIcon from "../image/search.svg";
import kim from "../image/kim_book.svg";
import life from "../image/life_book.svg";
import pig from "../image/pig_book.svg";
import tea from "../image/tea_book.svg";

const LongBook = () => {
  return (
  <LongBookContainer>
    <TitleContainer>
      은택님의 책장
    </TitleContainer>
    <BookItem>
      <ImgContainer>
       <img src={pig} alt="돼지책 표지" />
      </ImgContainer>
      <ContentBox>
        <TextContainer>돼지 책</TextContainer>
        <Separator />
        <TextContainer>어릴 때 제일 좋아하던 책! 추억이 새록새록해요</TextContainer>
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
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  `

export default LongBook;
