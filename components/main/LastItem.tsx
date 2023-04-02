import React, { useCallback } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import Image from 'next/image';

import OverviewCL from '../recycle/element/overview/OverviewCL';
import { ItemsArray } from '../store/TableData';
import { backUrl } from '../../config/config';

type LastItemProps = {
  item: ItemsArray;
};

const LastItem = ({ item }: LastItemProps) => {
  const moveToDetail = useCallback(() => {
    Router.push(`/closet/details/${item.id}`);
  }, []);
  return (
    <OverviewCL Subject='Last Item' Address='Detail' onMove={moveToDetail} divided={true}>
      <LastItemSection>
        <ImageDiv>
          <ThumbnailWrapper>
            <Thumbnail>
              <Centered>
                <CImage src={`${backUrl}/${item.Images[0].src}`} alt={item.productName} width={100} height={100} priority={true} />
              </Centered>
            </Thumbnail>
          </ThumbnailWrapper>
        </ImageDiv>
        <div>
          <span></span>
          <p></p>
          <p></p>
        </div>
      </LastItemSection>
    </OverviewCL>
  );
};

export default LastItem;

const LastItemSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
`;

const ImageDiv = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 15px;
`;

const ThumbnailWrapper = styled.div`
  width: 100%;
`;

const Thumbnail = styled.div`
  position: relative;
  padding-top: 100%;
  overflow: hidden;
  border-radius: 20px;
`;

const Centered = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transform: translate(50%, 50%);
  -ms-transform: translate(50%, 50%);
  transform: translate(50%, 50%);
`;

const CImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
