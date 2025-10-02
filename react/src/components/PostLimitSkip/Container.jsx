import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

export default function Container() {
  const [posts, setPosts] = useState([]); // 상품 목록 상태
  const [skip, setSkip] = useState(0); // 상품 시작 인덱스 상태
  const LIMIT = 5; // 한 페이지에 표시할 상품 수

  useEffect(() => {
    async function fetchPosts() {
      // 적절한 요청 URL을 작성한다
      const response = await axios.get("https://dummyjson.com/posts");
      setPosts(response["data"]["posts"]);
    }

    fetchPosts();
  }, [skip]);

  // 적절한 함수를 작성한다

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex gap-2 mb-6">
        <button className="bg-gray-500 text-white px-3 py-1 cursor-pointer">
          처음으로
        </button>
        <button className="bg-blue-500 text-white px-3 py-1 cursor-pointer">
          이전
        </button>
        <button className="bg-blue-500 text-white px-3 py-1 cursor-pointer">
          다음
        </button>
        <button className="bg-gray-500 text-white px-3 py-1 cursor-pointer">
          마지막으로
        </button>
      </div>
      <div className="space-y-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
