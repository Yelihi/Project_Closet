import React from 'react';
import styled from 'styled-components';

type props = {
  phoneMenuClick: boolean;
  onPhoneMenuClick: () => void;
};

const MoblieSideList = ({ phoneMenuClick, onPhoneMenuClick }: props) => {
  return (
    <PhoneMenuContainer>
      <div onClick={onPhoneMenuClick}>뒤로가기</div>
    </PhoneMenuContainer>
  );
};

export default MoblieSideList;

const PhoneMenuContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.brown};
`;
