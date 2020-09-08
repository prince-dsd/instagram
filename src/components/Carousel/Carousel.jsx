import React, { useState, useRef } from "react";
import Slider from "react-slick";

import {
  LeftArrow,
  RightArrow,
  InstagramStory,
  ImageContainer,
  UserImage,
} from "./CarouselStyles";
import { userList } from "../data";

const Carousel = () => {
  const [leftArraow, setLeftArrow] = useState(false);
  const [rightArrow, setRightArrow] = useState(true);

  const slider1 = useRef();

  const setArrowDisplay = (currentSlide) => {
    setLeftArrow(currentSlide !== 0);
    setRightArrow(
      currentSlide !== userList.length - settingsSliderNav.slidesToShow
    );
  };
  const next = () => {
    slider1.current.slickNext();
  };
  const previous = () => {
    slider1.current.slickPrev();
  };
  const settingsSliderNav = {
    dots: false,
    arrows: false,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 5,
    slidesToScroll: 4,
    speed: 500,

    afterChange: (currentSlide) => setArrowDisplay(currentSlide),
  };

  return (
    <InstagramStory>
      {leftArraow && <LeftArrow onClick={previous} />}
      {rightArrow && <RightArrow onClick={next} />}

      <Slider ref={slider1} {...settingsSliderNav}>
        {userList.map((user, index) => (
          <ImageContainer key={index}>
            <UserImage image={user.url} />
          </ImageContainer>
        ))}
      </Slider>
    </InstagramStory>
  );
};

export default Carousel;
