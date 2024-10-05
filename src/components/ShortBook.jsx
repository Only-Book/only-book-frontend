import styled from "styled-components";
import searchIcon from "../image/search.svg";


const ShortBook = () => {
  return (
  <ShortBookContainer>
    이번주 베스트셀러
    <BookContainer>
      <img src={searchIcon} alt="검색" />
    </BookContainer>
  </ShortBookContainer>
  );
};

const ShortBookContainer = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.brown};
`;

const BookContainer = styled.div`
  display: flex;
`

export default ShortBook;
