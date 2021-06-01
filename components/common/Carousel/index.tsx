import React, { useRef } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import CarouselNavButton from './Buttons';

const SliderWrapper = styled.div`
  .slick-list {
    overflow: visible !important;
  }
`;

const settings = {
  initialSlide: 1,
  lazyLoad: 'ondemand',
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  mobileFirst: true,
  accessibility: true,
  focusOnSelect: false,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = ({ children, centerPadding, centerMode, buttonsTop, customButtons }): JSX.Element => {
  const sliderRef = useRef();

  const renderButtons = () => (
    <div className="grid gap-8 grid-cols-2 mx-auto w-full absolute -top-14">
      <CarouselNavButton flow="left" onClick={() => sliderRef?.current?.slickPrev()} />
      <CarouselNavButton flow="right" onClick={() => sliderRef?.current?.slickNext()} />
    </div>
  );

  return (
    <>
      {buttonsTop && customButtons && renderButtons()}
      <SliderWrapper className="overflow-hidden py-4">
        <Slider
          {...settings}
          arrows={!customButtons}
          centerMode={centerMode}
          centerPadding={centerPadding}
          ref={sliderRef}
        >
          {children}
        </Slider>
      </SliderWrapper>
      {!buttonsTop && customButtons && renderButtons()}
    </>
  );
};

export default Carousel;
