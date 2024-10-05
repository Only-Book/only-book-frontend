import styled from "styled-components";
import { useState } from "react";

const Genre = () => {
  const [selectGenre, setSelectGenre] = useState([]);

  const handleSelect = (genre) => {
    if (selectGenre.includes(genre)) {
      setSelectGenre(selectGenre.filter((g) => g !== genre));
    } else {
      setSelectGenre([...selectGenre, genre]);
    }
  };

  return (
    <GenreContainer>
      <Title>장르 선택하기</Title>
      <GenreListContainer>
        <GenreList>
          <GenreSelect
            onClick={() => handleSelect("스릴러")}
            $isSelected={selectGenre.includes("스릴러")}
          >
            오싹 가득
            <br />
            스릴러
          </GenreSelect>
          <GenreSelect
            onClick={() => handleSelect("로맨스")}
            $isSelected={selectGenre.includes("로맨스")}
          >
            설렘 가득
            <br />
            로맨스
          </GenreSelect>
          <GenreSelect
            onClick={() => handleSelect("과학")}
            $isSelected={selectGenre.includes("과학")}
          >
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
            동심으로
            <br />
            동화책
          </GenreSelect>
          <GenreSelect
            onClick={() => handleSelect("비즈니스")}
            $isSelected={selectGenre.includes("비즈니스")}
          >
            경제와 함께
            <br />
            비즈니스
          </GenreSelect>
          <GenreSelect
            onClick={() => handleSelect("개발서")}
            $isSelected={selectGenre.includes("개발서")}
          >
            자기 발전
            <br />
            개발서
          </GenreSelect>
        </GenreList>
      </GenreListContainer>
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
  padding: 2vw;
  line-height: 140%;
  justify-content: end;
  text-align: end;
  width: 18vw;
  height: 18vh;
  min-height: 200px;
  border: 2px solid ${({ theme }) => theme.colors.brown};
  border-radius: 1vw;
  margin: 2vw;
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.beige : theme.colors.gray};
  cursor: pointer;
`;

export default Genre;
