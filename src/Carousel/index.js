import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const marginRight = 15;

const CarouselContainer = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`;

const CarouselWrapper = styled.div`
  display: flex;
  position: absolute;
  transition: left 0.5s ease-in-out;
  top: 0;
  left: -${({ left }) => left}px;
  bottom: 0;
  > div {
    margin-right: ${marginRight}px;
  }

  > div:last-child {
    margin-right: 0;
  }
`;

const Prev = styled.div`
  position: absolute;
  font-weight: bold;
  font-size: 35px;
  z-index: 10;
  width: 40px;
  height: 240px;
  background-color: rgb(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Next = styled.div`
  position: absolute;
  font-weight: bold;
  font-size: 35px;
  right: 0;
  z-index: 10;
  width: 40px;
  height: 240px;
  background-color: rgb(255, 255, 255, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Carousel = ({ children }) => {
  const [left, setLeft] = useState(0);
  const [currentChildIndex, setCurrentChildIndex] = useState(0);

  const childrenInView = 3;
  const childWidth = 540;
  const marginRight = 15;

  const handlePrev = () => {
    if (left > 0) {
      setLeft(left - childWidth + marginRight);
      setCurrentChildIndex(currentChildIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentChildIndex < children.length - childrenInView) {
      setLeft(left + childWidth + marginRight);
      setCurrentChildIndex(currentChildIndex + 1);
    }
  };

  useEffect(() => {}, [left]);

  return (
    <CarouselContainer>
      <CarouselWrapper left={left}>{children}</CarouselWrapper>
      <Prev onClick={handlePrev}>{"<"}</Prev>
      <Next onClick={handleNext}>{">"}</Next>
    </CarouselContainer>
  );
};

export default Carousel;