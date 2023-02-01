import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';

import { media } from '../../styles/media';

import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import { sidebarList, dropList } from './ListName';

const SideList = () => {
  const [clickDrop, setClickDrop] = useState<boolean>(false);

  console.log(clickDrop);

  const onClickDrop = useCallback(() => {
    setClickDrop(prev => !prev);
  }, []);

  return (
    <ListContainer>
      <ul>
        {sidebarList.map((prop, i) => {
          return i === 2 ? (
            <>
              <Link href={prop.path}>
                <ListBox key={i} direction={true} onClick={onClickDrop}>
                  <div>
                    <div>
                      {prop.icon}
                      <li>{prop.name}</li>
                    </div>
                    <MdOutlineKeyboardArrowDown className='logo' />
                  </div>
                </ListBox>
              </Link>
              {dropList.map((prop, j) => {
                return (
                  <Link href={prop.path}>
                    <DropListBox key={j} clickDrop={clickDrop}>
                      <div>{prop.icon}</div>
                      <li>{prop.name}</li>
                    </DropListBox>
                  </Link>
                );
              })}
            </>
          ) : (
            <Link href={prop.path}>
              <ListBox key={i} direction={false}>
                {prop.icon}
                <li>{prop.name}</li>
              </ListBox>
            </Link>
          );
        })}
      </ul>
    </ListContainer>
  );
};

export default SideList;

const ListContainer = styled.div`
  width: 100%;
  height: fit-content;
  ${media.tablet} {
    position: sticky;
    position: -webkit-sticky;
    top: -1px;
  }
`;

const ListBox = styled.div<{ direction: boolean }>`
  width: 100%;
  height: auto;
  margin: 4px 0;
  padding: 9px 30px 9px 30px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  overflow: hidden;
  ${props =>
    props.direction
      ? css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;

          > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            > div {
              display: flex;
              justify-content: flex-start;
              align-items: center;
            }
          }
        `
      : css`
          display: flex;
          justify-content: flex-start;
          align-items: center;
        `}

  .logo {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }

  &:hover {
    border-left: 2px solid white;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const DropListBox = styled.div<{ clickDrop: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 0;
  padding: 0 30px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: all 0.5s ease-out;

  > div {
    opacity: 0;
    transition: all 0.2s ease-out;
  }

  > li {
    opacity: 0;
    transition: all 0.2s ease-out;
  }

  ${props =>
    props.clickDrop
      ? css`
          height: 38px;
          padding-top: 9px;
          padding-bottom: 9px;

          > div {
            opacity: 1;
          }

          > li {
            opacity: 1;
          }
        `
      : css`
          height: 0px;
          padding-top: 0;
          padding-bottom: 0;

          > div {
            opacity: 0;
          }

          > li {
            opacity: 0;
          }
        `}

  .logo {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }

  &:hover {
    border-left: 2px solid white;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
