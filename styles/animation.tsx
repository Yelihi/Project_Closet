import styled, { keyframes } from 'styled-components';

export const phoneSearch = keyframes`
  0%{
    width: 100%;
    gap: 20px;
  }
  50%{
    width: 50%;
    gap: 10px
  }
  100%{
    width: 0;
    gap: 0
  }
`;

export const clickDropToggle = keyframes`
  from{
    height: 0;
    opacity: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
  to{
    height: 38px;
    opacity: 1;
    padding-top: 9px;
    padding-bottom: 9px;
  }
`;

export const returnDropToggle = keyframes`
  from{
    height: 38px;
    opacity: 1;
    padding-top: 9px;
    padding-bottom: 9px;
  }
  to{
    height: 0;
    opacity: 0;
    padding-top: 0;
    padding-bottom: 0;
  }
`;
