import React, { useEffect } from 'react';
import { LottieOptions, useLottie } from 'lottie-react';
import { Player, IPlayerProps } from '@lottiefiles/react-lottie-player';
import FinishAni from '../public/AnimaionJson/finish.json';

type Style = { [Key in keyof React.CSSProperties]: React.CSSProperties[Key] };

const deafultStyle = {
  width: '25rem',
  height: '25rem',
};

const defaultProps: IPlayerProps = {
  loop: false,
  src: FinishAni,
  autoplay: true,
  style: deafultStyle,
};

const defaultOptions: LottieOptions = {
  animationData: FinishAni,
  loop: false,
  autoplay: true,
};

const useLottieAnimation = (options: IPlayerProps = defaultProps, state?: boolean) => {
  // const { container, play, stop } = new Player(defaultProps);

  // useEffect(() => {
  //   play();

  //   return () => {
  //     stop();
  //   };
  // }, [state]);

  return <Player {...options}></Player>;
};

export default useLottieAnimation;
