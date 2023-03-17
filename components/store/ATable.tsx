import Image from 'next/image';
import Router from 'next/router';
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { Empty } from 'antd';
import { StoreHeaderType, StoreItemsType, ItemsArray } from './TableData';

import { backUrl } from '../../config/config';

import { FaTrashRestoreAlt } from 'react-icons/fa';
import { BiDetail } from 'react-icons/bi';

type TableProps = {
  headData: StoreHeaderType[];
  itemsData: ItemsArray[] | undefined;
  isDelete?: boolean;
  onSubmit?: (id: number) => () => void;
};

const ATable = ({ headData, itemsData = [], isDelete, onSubmit }: TableProps) => {
  const headerKey = headData.map(v => v.value);
  const moveToDetailsPage = useCallback(
    (id: number) => () => {
      Router.push(`/closet/details/${id}`);
    },
    []
  );

  return (
    <Table>
      <Thead>
        <tr>
          {headData.map((header, idx) => {
            return (
              <Th key={header.text} index={header.text}>
                {header.text}
              </Th>
            );
          })}
        </tr>
      </Thead>
      <tbody>
        {itemsData.length > 1 ? (
          itemsData.map((data, index) => {
            return (
              <Tr key={index}>
                {headerKey.map(headKey => {
                  return (
                    <Td key={headKey + index}>
                      {headKey === 'productName' && data.Images ? (
                        <ImageBox>
                          <CImage src={`${backUrl}/${data.Images[0].src}`} alt={headKey} width={100} height={100} />
                          {data[headKey]}
                        </ImageBox>
                      ) : headKey === 'price' ? (
                        data[headKey].toLocaleString('ko-KR')
                      ) : headKey === 'etc' && isDelete && onSubmit ? (
                        <EtcBox>
                          <ETC onClick={moveToDetailsPage(data.id)}>
                            <BiDetail className='icon' /> 상세보기
                          </ETC>
                          <ETC onClick={() => (window.confirm('삭제하시겠습니까?') ? onSubmit(data.id)() : () => console.log('취소했씁니다'))}>
                            <FaTrashRestoreAlt className='icon' /> 삭제하기
                          </ETC>
                        </EtcBox>
                      ) : (
                        headKey !== 'etc' && data[headKey]
                      )}
                    </Td>
                  );
                })}
              </Tr>
            );
          })
        ) : (
          <Empty />
        )}
      </tbody>
    </Table>
  );
};

export default ATable;

const Table = styled.table`
  width: 100%;
  height: auto;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid ${({ theme }) => theme.colors.mainGrey};
  border-radius: 10px;
`;

const Thead = styled.thead``;

const Th = styled.th<{ index: string }>`
  text-align: start;
  padding: 15px;
  font-family: ${({ theme }) => theme.font.Efont};
  color: ${({ theme }) => theme.colors.middleGrey};

  ${props =>
    props.index === 'Purchase Day'
      ? css`
          width: 150px;
        `
      : props.index === 'Item Categori'
      ? css`
          width: 150px;
        `
      : props.index === 'Cost'
      ? css`
          width: 120px;
        `
      : props.index === 'etc'
      ? css`
          width: 230px;
        `
      : css`
          width: fit-content;
        `}
`;

const Tr = styled.tr`
  transition: box-shadow 0.1s ease-out;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

const Td = styled.td`
  text-align: start;
  padding: 15px;
  font-size: 14px;
  border-top: 1px solid ${({ theme }) => theme.colors.mainGrey};
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  color: ${({ theme }) => theme.colors.deepGrey};
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

const CImage = styled(Image)`
  border-radius: 5px;
`;

const EtcBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 10px;
`;

const ETC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  color: ${({ theme }) => theme.colors.deepGrey};
  padding: 7px;
  gap: 5px;
  border: 1px solid ${({ theme }) => theme.colors.mainGrey};
  border-radius: 10px;
  transition: box-shadow 0.1s ease-out;
  cursor: pointer;

  .icon {
    width: 17px;
    height: 17px;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;
