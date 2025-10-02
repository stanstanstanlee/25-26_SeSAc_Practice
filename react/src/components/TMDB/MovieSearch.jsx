import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
// BASE_URL 과 API_KEY 를 선언하고, 적절한 값을 할당한다
const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];
export default function MovieSearch() {
  // 검색 결과와 검색어를 관리할 적절한 상태를 생성한다
  const [query, setQuery] = useState(""); // input 값
  const [movies, setMovies] = useState([]); // 검색 결과
  // onSubmit 이벤트와 onChange 이벤트의 핸들러 함수를 정의한다
  function handleChange(event) {
    setQuery(event["target"]["value"]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!query) return alert("검색어를 입력하세요");
    if (query === "") return;
    async function fetchData() {
      const config = {
        method: "GET",
        url: `${BASE_URL}/search/movie`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          query: query,
          include_adult: true,
          language: "ko-KR",
          primary_release_year: "",
          page: 1,
          region: "",
          year: "",
        },
      };
      const { data } = await axios(config);
      setMovies(data["results"]);
    }
    fetchData();
  }
  return (
    <div>
      <form
        onSubmit={(event) => {
          // form 태그의 onSubmit 속성에서 실행할 함수를 정의하고, 호출한다
          handleSubmit(event);
        }}
      >
        <input
          type="text"
          placeholder="영화 이름"
          className="px-2 py-1 border-2 rounded"
          onChange={(event) => {
            // input 태그의 onChange 속성에서 실행할 함수를 정의하고, 호출한다
            handleChange(event);
          }}
        />
        <input
          type="submit"
          value="검색"
          className="px-2 py-1 border-2 cursor-pointer ml-2 bg-blue-600 text-white rounded hover:bg-blue-800 transition-colors"
        />
      </form>
      <ul>
        {/* Movie 컴포넌트를 활용하여 검색된 영화 데이터를 반복 생성하여 표시 */}
        {movies.map((movie) => (
          // movie 객체를 props로 전달
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}
