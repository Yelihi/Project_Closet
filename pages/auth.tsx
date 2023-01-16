import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import todoImage from '../public/images/todo2.jpg';

import Login from '../components/Login';
import Signup from '../components/Signup';

const Auth = () => {
  const [gotoAccount, setGotoAccount] = useState<boolean>(false);

  const toggleGotoAccount = () => {
    setGotoAccount(prev => !prev);
  };

  return (
    <Container>
      <Section>
        {gotoAccount ? <Signup toggleGotoAccount={toggleGotoAccount} /> : <Login toggleGotoAccount={toggleGotoAccount} />}
        <ImageBox>
          <Image alt='todo' src={todoImage} width={500} height={500} placeholder='blur' />
        </ImageBox>
      </Section>
    </Container>
  );
};

export default Auth;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
`;

const Section = styled.section`
  display: flex;
  width: fit-content;
  height: 630px;
  background-color: white;
`;

const ImageBox = styled.div`
  position: relative;
  display: block;
  width: auto;
  height: 628px;
  padding: 20px;

  > img {
    width: 500px;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;
