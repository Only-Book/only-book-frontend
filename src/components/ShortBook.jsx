import styled from "styled-components";
import searchIcon from "../image/search.svg";


const ShortBook = () => {
  return (
  <ShortBookContainer>
    <TitleContainer>
      이번주 베스트셀러
    </TitleContainer>
      <BookContainer>
        <BookItem>
          <ImgContainer>
            <img src={searchIcon} alt="검색" />
          </ImgContainer>
          <TextContainer>
            책 이름
          </TextContainer>
        </BookItem>
        <BookItem>
          <ImgContainer>
            <img src={searchIcon} alt="검색" />
          </ImgContainer>
          <TextContainer>
            책 이름
          </TextContainer>
        </BookItem>
        <BookItem>
          <ImgContainer>
            <img src={searchIcon} alt="검색" />
          </ImgContainer>
          <TextContainer>
            책 이름
          </TextContainer>
        </BookItem>
        <BookItem>
          <ImgContainer>
            <img src={searchIcon} alt="검색" />
          </ImgContainer>
          <TextContainer>
            책 이름
          </TextContainer>
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
  background: ${({theme})=>theme.colors.brown};
  border-radius: 10px;
`

const TitleContainer = styled.div`
  margin: 50px;
${({theme})=>theme.fonts.button};
`

const TextContainer = styled.div`
  margin: 20px;
  ${({theme})=>theme.fonts.subText};
`

export default ShortBook;
