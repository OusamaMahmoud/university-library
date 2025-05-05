"use client";
import Posts from "./components/Posts";
import useFetchPosts from "./hooks/useFetchPosts";

export default function Home() {
  const { posts } = useFetchPosts();

  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Posts</h1>
      <button className="p-4 shadow-lg text-lg  ">Add Post</button>
      <Posts posts={posts} />
    </main>
  );
}
