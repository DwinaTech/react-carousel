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
  transition: left 0.3s ease-in-out;
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
  height: ${({ height }) => height}px;
  background-color: rgb(216, 9, 171, 0.3);
  color: #ffffff;
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
  height: ${({ height }) => height}px;
  color: #ffffff;
  background-color: rgb(216, 9, 171, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Carousel = ({ children, childrenInFullView = 1 }) => {
  const [left, setLeft] = useState(0);
  const [childWidth, setChildWidth] = useState(0);
  const [childHeight, setChildHeight] = useState(0);
  const [currentChildIndex, setCurrentChildIndex] = useState(0);

  const lasChildInView =
    currentChildIndex >= children.length - childrenInFullView;

  const handlePrev = () => {
    if (left > 0) {
      setLeft(left - (childWidth + marginRight));
      setCurrentChildIndex(currentChildIndex - 1);
    }
  };

  const handleNext = () => {
    if (!lasChildInView) {
      setLeft(left + childWidth + marginRight);
      setCurrentChildIndex(currentChildIndex + 1);
    }
  };

  useEffect(() => {
    const firstChild = document.getElementById("carousel").childNodes[0];
    if (firstChild) {
      setChildWidth(firstChild.clientWidth);
      setChildHeight(firstChild.clientHeight);
    }
  }, [left]);

  return (
    <CarouselContainer>
      <CarouselWrapper id="carousel" left={left}>
        {children}
      </CarouselWrapper>
      {left > 0 && (
        <Prev height={childHeight} onClick={handlePrev}>
          {"<"}
        </Prev>
      )}
      {!lasChildInView && (
        <Next height={childHeight} onClick={handleNext}>
          {">"}
        </Next>
      )}
    </CarouselContainer>
  );
};

export default Carousel;
