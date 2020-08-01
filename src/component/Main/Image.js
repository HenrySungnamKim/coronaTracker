import React from "react";
import styled from "styled-components";
const index = () => {
  return (
    <Wrapper>
      <Image />
    </Wrapper>
  );
};

export default index;

const Wrapper = styled.div``;
const Image = styled.div`
  background-image: url("/static/background.jpg");
  background-size: 100% 100%;
  width: 100%;
  height: 320px;
`;
