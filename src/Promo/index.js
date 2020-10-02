import React from "react";
import styled from "@emotion/styled";
import { promos } from "./static-data";
import Carousel from "../Carousel";

const PromoWrapper = styled.div`
  width: 240px;
  height: 240px;
  background: gray;
  color: #fff;
  justify-content: center;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 35px;
`;

const Promo = () => (
  <Carousel>
    {promos.map((promo, i) => (
      <PromoWrapper key={i}>{promo.title}</PromoWrapper>
    ))}
  </Carousel>
);

export default Promo;
