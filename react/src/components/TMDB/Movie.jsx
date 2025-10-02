import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Movie({ movie }) {
  return (
    <li className="border-b py-2">
      <h2 className="font-bold text-lg">{movie.title}</h2>
      <p>id: {movie.id}</p>
      <p>{movie.overview || "줄거리 없음"}</p>
      <p>개봉일: {movie.release_date}</p>
      <p>평점: {movie.vote_average}</p>
    </li>
  );
}
