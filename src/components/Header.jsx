import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const nav = useNavigate();

  const handleLoginClick = () => {
    nav('/login');
  };

  return (
    <HeaderContainer>
      로고
      <SearchContainer>
              <SearchInput
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="검색할 책의 제목을 입력해주세요."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      // 검색 로직을 추가하거나 원하는 동작을 여기에 정의하세요
                      console.log(`검색어: ${searchQuery}`);
                    }
                  }}              />
      </SearchContainer>
      <StyledButton>Home</StyledButton>
      <StyledButton>갈릭 봇</StyledButton>
      <StyledButton>나만의 책장</StyledButton>
      <LoginButton onClick={handleLoginClick}>로그인</LoginButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: ${({theme})=>theme.colors.brown};
  height: 50px;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 400px;
`
const SearchInput = styled.input`
  flex: 1; /* 부모 컨테이너의 남은 공간을 차지하도록 설정 */
  padding: 5px; /* 여백 설정 */
  border: 5px solid ${({ theme }) => theme.colors.brown};
  border-radius: 10px;

`;

const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 10px;
  cursor: pointer;
  margin: 0px;
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
  margin: 10px;
`;

export default Header;