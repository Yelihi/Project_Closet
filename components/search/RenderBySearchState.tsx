import styled from 'styled-components';

import { Player, Controls } from '@lottiefiles/react-lottie-player';
import useLottieAnimation from '../../hooks/useLottieAnimation';

import searchLoading from '../../public/AnimaionJson/searchLoading.json';

import { useLottiePropsByState } from './Data';

type RenderBySearchStateProps = {
  state: keyof typeof useLottiePropsByState;
};

const RenderBySearchState = ({ state }: RenderBySearchStateProps) => {
  const View = useLottieAnimation(useLottiePropsByState[state].options);

  return (
    <StateContainer>
      <Player src={searchLoading} autoplay loop style={{ width: '10rem', height: '10rem' }}>
        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
      </Player>
      <p>{useLottiePropsByState[state].Notify}</p>
    </StateContainer>
  );
};

export default RenderBySearchState;

const ResultsListContainer = styled.section`
  padding: 2rem;
  width: 100%;
  height: auto;

  > h4 {
    display: block;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.symbol};
  }
`;

const StateContainer = styled(ResultsListContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 0.5rem;
`;
