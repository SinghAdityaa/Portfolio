import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>My Portfolio</h1>
      <p>Welcome to my professional portfolio</p>
    </HeaderContainer>
  );
}

export default Header;
