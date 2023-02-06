import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import * as t from '../../reducers/type';

import AppLayout from '../../components/AppLayout';
import Nav from '../../components/Nav';
import Intersection from './element/Intersection';

import { media } from '../../styles/media';

import { NavRow } from '../../pages/closet/overview';

type Props = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Props): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: t.RESET_MENU_CLICK });
  }, []);

  return (
    <AppLayout>
      <Container>
        <NavRow>
          <Nav />
        </NavRow>
        <Intersection></Intersection>
        {children}
      </Container>
    </AppLayout>
  );
};

export default PageLayout;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 50px;
  padding: 24px;
  ${media.tablet} {
    gap: 10px;
  }
`;
