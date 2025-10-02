import React from "react";
import { useState } from "react";
import axios from "axios";

// BASE_URL 과 API_KEY 를 선언하고, 적절한 값을 할당한다
const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];
export default function MovieSearch() {
  // 검색 결과와 검색어를 관리할 적절한 상태를 생성한다
  const [movies, setMovies] = useState([]);
  // onSubmit 이벤트와 onChange 이벤트의 핸들러 함수를 정의한다
  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "GET",
        url: `${BASE_URL}search/movie`,
        headers: {
          "Content-Type": "application/json",
          accept: "aaplication/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          query: "",
          include_adult: false,
          language: "ko-KR",
          primary_release_year: "",
          page: 1,
          region: "",
          year: "",
        },
      };
    }
  });
  return (
    <div>
      <form
        onSubmit={() => {
          // form 태그의 onSubmit 속성에서 실행할 함수를 정의하고, 호출한다
        }}
      >
        <input
          type="text"
          placeholder="영화 이름"
          onChange={() => {
            // input 태그의 onChange 속성에서 실행할 함수를 정의하고, 호출한다
          }}
        />
        <input type="submit" value="검색" />
      </form>
      <ul>
        {/* Movie 컴포넌트를 활용하여 검색된 영화 데이터를 반복 생성하여 표시 */}
      </ul>
    </div>
  );
}
