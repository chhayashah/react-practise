import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`,
    );

    const data = await response.json();

    setPosts((prevPosts) => [...prevPosts, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      if (bottom && !loading) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Infinite Scroll</h2>

      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}

      {loading && <h3>Loading...</h3>}
    </div>
  );
};
export default InfiniteScroll;
