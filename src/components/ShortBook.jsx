import styled from "styled-components";
import kim from "../image/kim_book.svg";
import life from "../image/life_book.svg";
import pig from "../image/pig_book.svg";
import tea from "../image/tea_book.svg";

const ShortBook = () => {
  return (
    <ShortBookContainer>
      <TitleContainer>이번주 베스트셀러</TitleContainer>
      <BookContainer>
        <BookItem>
          <ImgContainer>
            <img src={pig} alt="돼지책 표지" />
          </ImgContainer>
          <TextContainer>돼지책</TextContainer>
        </BookItem>
        <BookItem>
          <ImgContainer>
            <img src={kim} alt="므레모사 표시" />
          </ImgContainer>
          <TextContainer>므레모사</TextContainer>
        </BookItem>
        <BookItem>
          <ImgContainer>
            <img src={tea} alt="차의 맛을 선에 담다 표지" />
          </ImgContainer>
          <TextContainer>차의 맛을 선에 담다</TextContainer>
        </BookItem>
        <BookItem>
          <ImgContainer>
            <img src={life} alt="물질에서 생명으로 표지" />
          </ImgContainer>
          <TextContainer>물질에서 생명으로</TextContainer>
        </BookItem>
      </BookContainer>
    </ShortBookContainer>
  );
};

const ShortBookContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.colors.brown};
  margin-top: 20px;
`;

const BookContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0px;
`;

const BookItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
`;

const ImgContainer = styled.div`
  height: 300px;
  width: 200px;
  background: ${({ theme }) => theme.colors.brown};
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const TitleContainer = styled.div`
  margin: 50px;
  ${({ theme }) => theme.fonts.button};
`;

const TextContainer = styled.div`
  margin: 20px;
  ${({ theme }) => theme.fonts.subText};
`;

export default ShortBook;
