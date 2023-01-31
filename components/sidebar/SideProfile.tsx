import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const SideProfile = () => {
  return (
    <ImageContainer>
      <Image src='/images/newClosetLogo.png' alt='로고' width={120} height={130} />
    </ImageContainer>
  );
};

export default SideProfile;

const ImageContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;
