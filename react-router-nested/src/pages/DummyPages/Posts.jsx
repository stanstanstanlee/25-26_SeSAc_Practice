import React from "react";
import PostsList from "../../components/PostsList";

export default function Posts() {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">게시글 목록</h2>
      <PostsList />
    </div>
  );
}
