import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import searchIcon from "../image/search.svg";
import garlic from "../image/garlic.svg";
import styled from "styled-components";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const nav = useNavigate();

  const handleLoginClick = () => {
    nav('/login');
  };

  const handleHomeClick = () => {
    nav('/');
  };

  const handleMyBookClick = () => {
    nav('/mybook');
  };

  const handleChatBotClick = () => {
    nav('/chatbot');
  };

  const handleSearch = async (query) => {
    try {
      // API 요청
      const response = await axios.get(`${import.meta.env.VITE_BE_ENDPOINT}/api/book`, {
        params: { title: query } // 제목으로 책을 검색
      });

      const books = response.data; // 검색된 책 목록
      if (books.length > 0) {
        // 첫 번째 책의 ID를 사용하여 상세 페이지로 이동
        nav(`/detail/${books[0].id}`);
      } else {
        alert("책을 찾을 수 없습니다."); // 검색 결과가 없을 때
      }
    } catch (error) {
      console.error("검색 오류:", error);
      alert("검색 중 오류가 발생했습니다.");
    }
  };

  return (
    <HeaderContainer>
      <LeftContainer>
        <LogoContainer>
          <img src={garlic} alt="로고" />
        </LogoContainer>
        <SearchContainer>
          <SearchInput
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="검색할 책의 제목을 입력해주세요."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch(searchQuery); // Enter 키 입력 시 검색
              }
            }}
          />
          <IconButton onClick={() => handleSearch(searchQuery)}>
            <img src={searchIcon} alt="검색" />
          </IconButton>
        </SearchContainer>
      </LeftContainer>
      <RightContainer>
        <StyledButton onClick={handleHomeClick}>Home</StyledButton>
        <StyledButton onClick={handleChatBotClick}>갈릭봇</StyledButton>
        <StyledButton onClick={handleMyBookClick}>나만의 책장</StyledButton>
        <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
      </RightContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${({theme})=>theme.colors.brown};
  height: 75px;
`;

const LeftContainer = styled.div`
display: flex;
align-items: center;
`

const RightContainer = styled.div`
display: flex;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 30px;
  img {
    width: 55px; /* 이미지의 너비 설정 */
    height: auto; /* 이미지 비율에 맞게 높이 자동 설정 */
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-content: center;
  height: 60px;
  width: 300px;
  background: ${({theme})=>theme.colors.white};
  border-radius: 10px;
  border: 5px solid ${({ theme }) => theme.colors.brown};
  margin: 3px 0px;
`
const SearchInput = styled.input`
  flex: 1; /* 부모 컨테이너의 남은 공간을 차지하도록 설정 */
  border: none;
  border-radius: 5px;
  outline: none;
  text-align: start; /* 플레이스홀더 글씨를 중앙에 위치 */
  ::placeholder {
    text-align: center; /* 플레이스홀더 텍스트 중앙 정렬 */
  }
  margin: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const IconButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 5px; /* 아이콘 주변 여백 설정 */
  margin: 2px 5px;
  img {
    width: 20px; /* 아이콘 크기 조정 */
    height: 20px; /* 아이콘 크기 조정 */
  }
`;

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 10px;
  cursor: pointer;
  margin: 0px 20px;
  font-size: 18px;
  font-weight: bold;
`;

const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.brown};
  border: 1px solid #61523F;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 10px 20px;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    background: ${({ theme }) => theme.colors.beige};
  }
`;

export default Header;