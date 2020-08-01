import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as dateFns from "date-fns";
import useSWR from "swr";
import Image from "src/component/Main/Image";
import Item from "src/component/Main/Item";

const host = "covid-193.p.rapidapi.com";
const key = process.env.RAPID_API_KEY;

const fetcher = (url) =>
  fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": host,
      "x-rapidapi-key": key,
      useQueryString: true,
    },
  }).then((res) => res.json());
const index = () => {
  let today = new Date();
  //데이터 건수
  let url =
    "https://covid-193.p.rapidapi.com/history?country=S-Korea&day=" + today;
  const { data, error } = useSWR(url, fetcher);
  if (error) return "에러발생";
  console.log(error);
  if (!data) return "로딩중..";
  return (
    <Wrapper>
      <Image />
      <ItemWrapper>
        <p>
          {dateFns.format(today, "yyyy년 MM월 dd일")} {data.results}건의
          데이터가 있습니다.
        </p>

        {data.response.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </ItemWrapper>
    </Wrapper>
  );
};

export default index;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
const ItemWrapper = styled.div`
  margin: 20px 0 0 0;
`;
