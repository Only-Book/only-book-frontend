import React, { useState } from 'react';
import styled from "styled-components";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <HeaderContainer>
      로고
      <SearchContainer>
              <SearchInput
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="검색할 책의 제목을 입력해주세요"
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
      </SearchContainer>
      <StyledButton>Home</StyledButton>
      <StyledButton>갈릭 봇</StyledButton>
      <StyledButton>나만의 책장</StyledButton>
      <LoginButton>로그인</LoginButton>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: ${({theme})=>theme.colors.brown};
  height: 50px
`;

const SearchContainer = styled.div`
  display: flex;
  width: 400px;
`
const SearchInput = styled.input`
  flex: 1; /* 부모 컨테이너의 남은 공간을 차지하도록 설정 */
  padding: 5px; /* 여백 설정 */
  border: 5px solid ${({ theme }) => theme.colors.brown}; /* 테두리 설정 */
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
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.brown};
  border: 1px soild #61523F;
  border-radius: 5px
  padding: 10px;
  cursor: pointer;
  margin: 10px;
`;

export default Header;
