import React, { useState, useEffect, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { media } from '../../styles/media';
import { clickDropToggle, returnDropToggle } from '../../styles/animation';

import {
  MdDashboardCustomize,
  MdOutlineSaveAlt,
  MdOutlineInsertChartOutlined,
  MdNoteAdd,
  MdOutlineAdminPanelSettings,
  MdOutlineKeyboardArrowDown,
  MdOutlineColorLens,
  MdOutlineAttachMoney,
  MdSortByAlpha,
} from 'react-icons/md';

const sidebarList = {
  '1': 'Overview',
  '2': 'Store',
  '3': 'Reports',
  '4': 'Add',
  '5': 'Administration',
};

const chartList = {
  '1': 'Color',
  '2': 'Price',
  '3': 'Sort',
};

const listIcon = {
  '1': <MdDashboardCustomize className='logo' />,
  '2': <MdOutlineSaveAlt className='logo' />,
  '3': <MdOutlineInsertChartOutlined className='logo' />,
  '4': <MdNoteAdd className='logo' />,
  '5': <MdOutlineAdminPanelSettings className='logo' />,
};

const DropListIcon = {
  '1': <MdOutlineColorLens className='logo' />,
  '2': <MdOutlineAttachMoney className='logo' />,
  '3': <MdSortByAlpha className='logo' />,
};

type ObjectShape = typeof sidebarList;
type keys = keyof ObjectShape;

type DropObjectShape = typeof chartList;
type DropKeys = keyof DropObjectShape;

const SideList = () => {
  const [clickDrop, setClickDrop] = useState<string>('');

  const onClickDrop = useCallback(() => {
    if (clickDrop === '' || clickDrop === 'off') {
      setClickDrop('on');
    } else {
      setClickDrop('off');
    }
  }, [clickDrop]);

  return (
    <ListContainer>
      <ul>
        {(Object.keys(sidebarList) as Array<keys>).map((key, i) => {
          return key === '3' ? (
            <>
              <ListBox key={i} direction={true} onClick={onClickDrop}>
                <div>
                  <div>
                    {listIcon[key]}
                    <li>{sidebarList[key]}</li>
                  </div>
                  <MdOutlineKeyboardArrowDown className='logo' />
                </div>
              </ListBox>
              {(Object.keys(chartList) as Array<DropKeys>).map((key, j) => {
                return (
                  <DropListBox key={j} clickDrop={clickDrop}>
                    {DropListIcon[key]}
                    <li>{chartList[key]}</li>
                  </DropListBox>
                );
              })}
            </>
          ) : (
            <ListBox key={i} direction={false}>
              {listIcon[key]}
              <li>{sidebarList[key]}</li>
            </ListBox>
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

const DropListBox = styled.div<{ clickDrop: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 0;
  padding: 0 30px;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  opacity: 0;

  .logo {
    width: 20px;
    height: 20px;
    margin-right: 6px;
  }

  &:hover {
    border-left: 2px solid white;
    background-color: rgba(0, 0, 0, 0.8);
  }

  ${props =>
    props.clickDrop === 'on' &&
    css`
      animation: ${clickDropToggle} 0.7s forwards;
    `}
  ${props =>
    props.clickDrop === 'off' &&
    css`
      animation: ${returnDropToggle} 0.7s forwards;
    `}
`;
