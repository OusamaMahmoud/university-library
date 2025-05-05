"use client";
import React from "react";

interface Post {
  id: number;
  title: string;
  content: string;
}

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="flex items-center flex-wrap gap-4 p-12">
      {posts && posts?.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.id}
            className="my-4 p-4 flex flex-col gap-10 shadow-md"
          >
            <h1 className="text-xl shadow-xl p-4">{post.title}</h1>
            <div className="text-lg p-2">{post.content}</div>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
      \{" "}
    </div>
  );
};

export default Posts;
