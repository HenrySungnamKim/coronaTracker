import React from "react";
import styled from "styled-components";
import * as dateFns from "date-fns";
const Item = ({ item }) => {
  return (
    <Wrapper>
      <p>신규확진: {item.cases.new}명 </p>
      <p>확진:{item.cases.active}명</p>
      <p>위독:{item.cases.critical}명</p>
      <p>회복:{item.cases.recovered}명</p>
      <p>전체 감염자수:{item.cases.total}명</p>
      <p>
        측정시간 :
        {dateFns.format(new Date(item.time), "yyyy년MM월dd일 HH시mm분(한국)")}
      </p>
      <br />
    </Wrapper>
  );
};

export default Item;

const Wrapper = styled.div`
  width: 320px;
  background-color: #f3f3f3;
  border: 1px solid #fefefe;
  padding: 10px;
`;
