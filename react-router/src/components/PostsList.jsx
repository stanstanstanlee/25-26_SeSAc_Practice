import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const { data } = await axios("https://dummyjson.com/posts");
      setPosts(data["posts"]);
    }
    getPosts();
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <br />
            <em>작성자: {post.userId}</em>
            <br />
            {post.body}
            <br />
            태그: {post.tags.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
