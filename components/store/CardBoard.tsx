import React from 'react';
import styled from 'styled-components';

import ItemCard from '../recycle/ItemCard';

import { ItemsArray } from './TableData';

interface Props {
  itemData: ItemsArray[] | undefined;
}

const CardBoard = ({ itemData }: Props) => {
  return (
    <CardSection>
      {itemData?.map(item => {
        return (
          <CardBox>
            <ItemCard src={item.Images[0].src} />
          </CardBox>
        );
      })}
    </CardSection>
  );
};

export default CardBoard;

const CardSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  gap: 10px;
`;

const CardBox = styled.div`
  width: 30%;
  height: auto;
`;
