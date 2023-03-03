import React, { useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Virtual, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { backUrl } from '../../config/config';

type Image = {
  id: number;
  src: string;
  createAt: string;
  updateAt: string;
  ClothId: number;
};

type Props = {
  src: Image[] | null;
};

SwiperCore.use([Navigation]);

const Slice = ({ src }: Props) => {
  const [swiperRef, setSwiperRef] = useState(null);
  console.log(src);

  const settings = useMemo(
    () => ({
      navigation: true,
      module: [Navigation],
    }),
    []
  );

  return (
    <>
      <CSwiper {...settings}>
        {src &&
          src.map((v, i) => {
            return (
              <CSwiperSlide>
                <CImage src={`${backUrl}/${v.src}`} alt={v.src} width={600} height={600} />
              </CSwiperSlide>
            );
          })}
        <CSwiperSlide>Slide1</CSwiperSlide>
        <CSwiperSlide>Slide2</CSwiperSlide>
        <CSwiperSlide>Slide3</CSwiperSlide>
      </CSwiper>
    </>
  );
};

export default Slice;

const CSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.brown};

    &::after {
      font-size: 20px;
    }
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.colors.brown};

    &::after {
      font-size: 20px;
    }
  }
`;

const CSwiperSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.milk};
`;

const CImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
