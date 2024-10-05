import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import thriller from "../image/thiller.svg";
import romance from "../image/romance.svg";
import science from "../image/science.svg";
import fairytail from "../image/fairytail.svg";
import business from "../image/bussiness.svg";
import assay from "../image/assay.svg";

const Genre = () => {
  const [selectGenre, setSelectGenre] = useState([]);

  const handleSelect = (genre) => {
    if (selectGenre.includes(genre)) {
      setSelectGenre(selectGenre.filter((g) => g !== genre));
    } else {
      setSelectGenre([...selectGenre, genre]);
    }
  };

  const isFormValid = selectGenre.length > 0;

  return (
    <GenreContainer>
      <Title>장르 선택하기</Title>
      <GenreListContainer>
        <GenreList>
          <GenreSelect
            onClick={() => handleSelect("스릴러")}
            $isSelected={selectGenre.includes("스릴러")}
          >
            <img src={thriller} alt="스릴러 이미지" />
            오싹 가득
            <br />
            스릴러
          </GenreSelect>
          <GenreSelect
            onClick={() => handleSelect("로맨스")}
            $isSelected={selectGenre.includes("로맨스")}
          >
            <img src={romance} alt="로맨스 이미지" />
            설렘 가득
            <br />
            로맨스
          </GenreSelect>
          <GenreSelect
            onClick={() => handleSelect("과학")}
            $isSelected={selectGenre.includes("과학")}
          >
            <img src={science} alt="과학 이미지" />
            정보 습득
            <br />
            과학
          </GenreSelect>
        </GenreList>
        <GenreList>
          <GenreSelect
            onClick={() => handleSelect("동화책")}
            $isSelected={selectGenre.includes("동화책")}
          >
            <img src={fairytail} alt="동화 이미지" />
            동심으로
            <br />
            동화책
          </GenreSelect>
          <GenreSelect
            onClick={() => handleSelect("비즈니스")}
            $isSelected={selectGenre.includes("비즈니스")}
          >
            <img src={business} alt="비즈니스 이미지" />
            경제와 함께
            <br />
            비즈니스
          </GenreSelect>
          <GenreSelect
            onClick={() => handleSelect("개발서")}
            $isSelected={selectGenre.includes("개발서")}
          >
            <img src={assay} alt="개발서 이미지" />
            자기 발전
            <br />
            개발서
          </GenreSelect>
        </GenreList>
      </GenreListContainer>
      {isFormValid ? (
        <Link to="/login">
          <Button $isFormValid={isFormValid}>완료</Button>
        </Link>
      ) : (
        <Button disabled={!isFormValid}>완료</Button>
      )}
    </GenreContainer>
  );
};

const GenreContainer = styled.div`
  display: flex;
  height: 90vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.mainTitle};
  color: ${({ theme }) => theme.colors.brown};
  margin: 0 7vh 7vh;
`;

const GenreListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GenreList = styled.div`
  display: flex;
`;

const GenreSelect = styled.div`
  ${({ theme }) => theme.fonts.button};
  display: flex;
  padding: 2vh;
  line-height: 140%;
  justify-content: space-between;
  text-align: end;
  width: 20vw;
  height: 18vh;
  min-height: 200px;
  border: 2px solid ${({ theme }) => theme.colors.brown};
  border-radius: 1vw;
  margin: 2vw;
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.beige : theme.colors.gray};
  cursor: pointer;

  img {
    width: 27%;
    margin-top: 7vh;
  }
`;

const Button = styled.div`
  ${({ theme }) => theme.fonts.heading}
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  width: 9vw;
  min-width: 100px;
  height: 6.5vh;
  min-height: 50px;
  border-radius: 1.08vw;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  background-color: ${({ theme, $isFormValid }) =>
    $isFormValid ? theme.colors.brown : theme.colors.gray};
  cursor: ${({ $isFormValid }) => ($isFormValid ? "pointer" : "not-allowed")};
`;

export default Genre;
