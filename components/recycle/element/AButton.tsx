import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import type { ButtonProp } from './type';

const AButton = ({ color, disabled, src, dest, onClick }: ButtonProp) => {
  return (
    <ButtonContainer color={color} disabled={disabled} onClick={onClick}>
      {src && <Image src={src} alt={dest} />}
      {dest}
    </ButtonContainer>
  );
};

export default AButton;

const ButtonContainer = styled.button<{ color: string; disabled: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 13px;
  border-radius: 20px;
  background-color: ${({ theme, color }) => (color ? color : theme.colors.white)};
  color: ${({ theme, color }) => (color ? theme.colors.white : theme.colors.black)};
  border: ${({ theme, color }) => (!color ? `1px solid ${theme.colors.black}` : 'none')};
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  transition: box-shadow 0.5s ease-out;

  &:hover {
    ${props =>
      props.disabled === false &&
      css`
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
      `}
  }

  > img {
    position: absolute;
    top: 50%;
    left: 85px;
    transform: translateY(-50%);
    width: 25px;
    height: 25px;
    object-fit: cover;
  }
`;
