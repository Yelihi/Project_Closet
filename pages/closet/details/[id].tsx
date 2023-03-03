import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import * as t from '../../../reducers/type';
import { useRouter } from 'next/router';

import PageLayout from '../../../components/recycle/PageLayout';
import PageMainLayout from '../../../components/recycle/main/PageMainLayout';
import Slice from '../../../components/recycle/Slice';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerType } from '../../../reducers/types';

import { Breadcrumb } from 'antd';
import Link from 'next/link';

const Details = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, singleItem } = useSelector((state: rootReducerType) => state.post);
  const { id } = router.query;

  const getItem = useCallback(() => {
    dispatch({
      type: t.LOAD_ITEM_REQUEST,
      data: { clothId: id, userId: user?.UserId },
    });
  }, [id, user]);

  return (
    <PageLayout>
      <PageMainLayout istitle={false}>
        <CustomBread separator='>'>
          <Breadcrumb.Item>
            <Link href='/closet/overview'>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href='/closet/store'>Store</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Details</Breadcrumb.Item>
        </CustomBread>
        <section>
          <SliceContainer>
            <SliceBox>
              <Slice src={singleItem && singleItem.Images} />
            </SliceBox>
            <ArrayImageContainer></ArrayImageContainer>
          </SliceContainer>
        </section>
        <button onClick={getItem}>실험중</button>
      </PageMainLayout>
    </PageLayout>
  );
};

export default Details;

const CustomBread = styled(Breadcrumb)`
  margin-bottom: 30px;
  .ant-breadcrumb-link {
    font-family: ${({ theme }) => theme.font.Efont};
    font-weight: ${({ theme }) => theme.fontWeight.Medium};

    > a {
      font-family: ${({ theme }) => theme.font.Efont};
      font-weight: ${({ theme }) => theme.fontWeight.Light};
    }
  }
`;

const SliceContainer = styled.div``;

const SliceBox = styled.div`
  max-width: 600px;
  height: 600px;
`;

const ArrayImageContainer = styled.div``;
