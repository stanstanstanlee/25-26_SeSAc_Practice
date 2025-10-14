import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
      <div>
        <button>제목 오름차순</button>
        <button>제목 내림차순</button>
        <button>게시글 오름차순</button>
        <button>게시글 내림차순</button>
      </div>
      {posts.map((post) => (
        // <li key={post.id}>
        //   <strong>{post.title}</strong>
        //   <br />
        //   <em>작성자: {post.userId}</em>
        //   <br />
        //   {post.body}
        //   <br />
        //   태그: {post.tags.join(", ")}
        // </li>
        <Link to={`/dummy/posts/${post.id}`} className="block">
          No. {post.id} - {post.title}
        </Link>
      ))}
    </div>
  );
}
