import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import AButton from '../recycle/element/AButton';
import google from '../../public/images/google.webp';

const GoogleButton = () => {
  return (
    <GoogleLink href='http://localhost:3065/auth/google'>
      <AButton color='' disabled={false} dest='Sign in Google' src={google} />
    </GoogleLink>
  );
};

export default GoogleButton;

const GoogleLink = styled(Link)`
  width: 100%;
`;
