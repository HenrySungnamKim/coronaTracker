import React, { useState, useEffect } from "react";
import * as dateFns from "date-fns";
import useSWR from "swr";

const host = "covid-193.p.rapidapi.com";
const key = process.env.rapidApiKey;

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
  let yesterday = dateFns.format(
    today.setDate(today.getDate() - 1),
    "yyyy-MM-dd"
  );
  //데이터 건수
  let url =
    "https://covid-193.p.rapidapi.com/history?country=S-Korea&day=" + yesterday;
  const { data, error } = useSWR(url, fetcher);
  if (error) return "에러발생";
  if (!data) return "로딩중..";
  console.log(data);
  return (
    <div>
      {data.results}건의 데이터가 있습니다.
      <br />
      <div>
        {data.response.map((item, index) => (
          <div key={index}>
            <p>신규발생:{item.cases.new}명</p>
            <p>확진:{item.cases.active}명</p>
            <p>위독:{item.cases.critical}명</p>
            <p>회복:{item.cases.recovered}명</p>
            <p>전체 감염자수:{item.cases.total}명</p>
            <p>
              측정날짜 :{" "}
              {dateFns.format(new Date(item.time), "yyyy년MM월dd일 HH시mm분")}
            </p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
