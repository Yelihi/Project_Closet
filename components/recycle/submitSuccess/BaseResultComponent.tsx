import React from 'react';
import styled from 'styled-components';
import { Button, Result } from 'antd';
import { ResultStatusType } from 'antd/es/result';

type Props = {
  title: string;
  subTitle: string;
  status: ResultStatusType;
  onClickPrimary: () => void;
  onClick: () => void;
  buttonNamePrimary: string;
  buttonName: string;
};

const BaseResultComponent = ({ title, subTitle, status, onClickPrimary, onClick, buttonNamePrimary, buttonName }: Props) => {
  return (
    <Container>
      <Result
        status={status}
        title={title}
        subTitle={subTitle}
        extra={[
          <Button type='primary' key={buttonNamePrimary} onClick={onClickPrimary}>
            {buttonNamePrimary}
          </Button>,
          <Button key={buttonName} onClick={onClick}>
            {buttonName}
          </Button>,
        ]}
      />
    </Container>
  );
};

export default BaseResultComponent;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
`;
