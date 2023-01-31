import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <FooterContainer>footer</FooterContainer>;
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.mainGrey};
  border-top: 1px solid rgba(30, 40, 51, 0.0671438); ;
`;
