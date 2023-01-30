import React from 'react';
import styled from 'styled-components';

import { HiOutlineMenuAlt2, HiOutlineSearch } from 'react-icons/hi';

const Nav = () => {
  return (
    <>
      <TestContainer>
        <NavContainer>
          <MenuContainer>
            <div>
              <Menu />
            </div>
            <div>
              <Search />
            </div>
          </MenuContainer>
          <InfoContainer>
            <HeadBox>
              <span>Closet Official</span>
              <p>user name</p>
            </HeadBox>
            <IconBox>
              <div></div>
            </IconBox>
          </InfoContainer>
        </NavContainer>
      </TestContainer>
    </>
  );
};

export default Nav;

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.middleGrey};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 13px 24px;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
  }
`;

const Menu = styled(HiOutlineMenuAlt2)`
  width: 24px;
  height: 24px;
`;

const Search = styled(HiOutlineSearch)`
  width: 24px;
  height: 24px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const HeadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  > span {
    font-weight: ${({ theme }) => theme.fontWeight.Medium};
    font-size: 12px;
    line-height: 14px;
  }

  > p {
    font-weight: ${({ theme }) => theme.fontWeight.Light};
    font-size: 10px;
    line-height: 14px;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};

  > div {
    background-image: url('/images/todo.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`;
