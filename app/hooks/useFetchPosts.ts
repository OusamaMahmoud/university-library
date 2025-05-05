"use client";
import { useEffect, useState } from "react";
import apiclient from "../services/apiclient";

const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await apiclient.get("/api/posts");
        console.log("Debug =>", response.data);
        setPosts(response.data);
      } catch (error) {
        // setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default useFetchPosts;
