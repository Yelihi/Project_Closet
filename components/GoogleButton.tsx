import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import google from '../public/images/google.webp';

const GoogleButton = () => {
  const signInGoogle = () => {};
  return (
    <GoogleLink href='http://localhost:3065/auth/google'>
      <Image src={google} alt='google button' />
      Sign in Google
    </GoogleLink>
  );
};

export default GoogleButton;

const GoogleLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 13px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;

  > img {
    position: absolute;
    top: 50%;
    left: 85px;
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
    object-fit: cover;
  }
`;
