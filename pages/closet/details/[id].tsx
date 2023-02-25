import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import * as t from '../../../reducers/type';
import { useRouter } from 'next/router';

import PageLayout from '../../../components/recycle/PageLayout';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerType } from '../../../reducers/types';

const Details = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: rootReducerType) => state.post);
  const { id } = router.query;
  console.log(id);

  const getItem = useCallback(() => {
    dispatch({
      type: t.LOAD_ITEM_REQUEST,
      data: { clothId: id, userId: user?.UserId },
    });
  }, [id, user]);

  return (
    <PageLayout>
      <TestContainer>
        <button onClick={getItem}>실험중</button>
      </TestContainer>
    </PageLayout>
  );
};

export default Details;

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2000px;
  background-color: ${({ theme }) => theme.colors.middleGrey};
`;
