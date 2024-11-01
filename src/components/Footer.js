import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  margin-top: 30px;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </FooterContainer>
  );
}

export default Footer;
