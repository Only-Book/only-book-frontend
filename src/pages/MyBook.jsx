import styled from "styled-components";
import LongBook from "../components/LongBook";

const MyBook = () => {
  return (
  <MyBookContainer>
    <LongBook />
  </MyBookContainer>
  );
};

const MyBookContainer = styled.div`
  display: flex;
`;

export default MyBook;
