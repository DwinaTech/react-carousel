import React from "react";
import Promo from "./Promo";
import styled from "@emotion/styled";

const AppWrapper = styled.div`
  margin-top: 160px;
`;

const App = () => (
  <AppWrapper>
    <Promo />
  </AppWrapper>
);

export default App;
