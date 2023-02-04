import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import useToggle from '../hooks/useToggle';
import { media } from '../styles/media';

import { phoneSearch } from '../styles/animation';

import MoblieSideList from './sidebar/MoblieSideList';

import { HiOutlineMenuAlt2, HiOutlineSearch } from 'react-icons/hi';

const Nav = () => {
  const [phoneMenuClick, onPhoneMenuClick] = useToggle(false);
  const [phoneSearchClick, onClickPhoneSearch] = useToggle(false);

  console.log(phoneMenuClick);

  const searchSubmit = () => {};
  return (
    <>
      {phoneMenuClick && <MoblieSideList phoneMenuClick={phoneMenuClick} onPhoneMenuClick={onPhoneMenuClick} />}
      <NavContainer>
        <MenuContainer search={phoneSearchClick}>
          <div>
            <Menu onClick={onPhoneMenuClick} />
          </div>
          <div>
            <Search onClick={onClickPhoneSearch} />
          </div>
          {phoneSearchClick && <input />}
          <InputBox>
            <form onSubmit={searchSubmit}>
              <input type='text' placeholder='Search' />
            </form>
            <div>
              <InputSearch />
            </div>
          </InputBox>
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
    </>
  );
};

export default Nav;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 13px 24px;
  background-color: ${({ theme }) => theme.colors.brown};

  ${media.tablet} {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border-radius: 8px;
  }
`;

const MenuContainer = styled.div<{ search: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  > div {
    &:first-child {
      ${props =>
        props.search &&
        css`
          animation: ${phoneSearch} 0.5s forwards;
        `}
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
  }

  ${media.tablet} {
    width: 100%;

    > div {
      display: none;
    }
  }
`;

const Menu = styled(HiOutlineMenuAlt2)`
  width: 24px;
  height: 24px;
  ${media.tablet} {
    display: none;
  }
`;

const Search = styled(HiOutlineSearch)`
  width: 24px;
  height: 24px;
  ${media.tablet} {
    display: none;
  }
`;

const InputSearch = styled(Search)`
  ${media.tablet} {
    display: block;
  }
`;

const InputBox = styled.section`
  position: relative;
  display: none;
  color: ${({ theme }) => theme.colors.lightGrey};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 16px;
  width: fit-content;
  height: fit-content;

  ${media.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 1;
    width: 100%;

    > form {
      width: 100%;
      > input {
        width: 100%;
        height: 36px;
        padding: 7px 46px;
        border-radius: 16px;
      }
    }

    > div {
      position: absolute;
      top: 5px;
      left: 15px;
      width: fit-content;
      height: fit-content;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 16px;

  ${media.tablet} {
    flex-shrink: 0;
    margin-left: 135px;
  }
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
