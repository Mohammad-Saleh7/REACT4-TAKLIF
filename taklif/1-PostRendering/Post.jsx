import { useEffect, useState } from "react";

export default function Post() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((info) => {
        setPost(info);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <h1 className="d-flex justify-content-center">Post List:</h1>
      {loading ? (
        <p>loading...</p>
      ) : (
        <ul>
          {post.map((items) => (
            <li key={items.id} style={{ border: "1px solid" }}>
              <h3 className="d-flex justify-content-center">{items.title}</h3>
              <p className="d-flex justify-content-center">{items.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
