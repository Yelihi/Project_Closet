import React from 'react';
import styled from 'styled-components';

import ItemCard from '../recycle/ItemCard';

import { ItemsArray } from './TableData';

interface Props {
  itemData: ItemsArray[] | undefined;
  onSubmit?: (id: number) => () => void;
}

const CardBoard = ({ itemData, onSubmit }: Props) => {
  return (
    <CardSection>
      {itemData?.map(item => {
        return (
          <CardBox key={item.id}>
            <ItemCard src={item.Images[0].src} id={item.id} onSubmit={onSubmit} />
          </CardBox>
        );
      })}
    </CardSection>
  );
};

export default CardBoard;

const CardSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  gap: 5%;
`;

const CardBox = styled.div`
  width: 30%;
  height: auto;
  margin-bottom: 5%;
`;
