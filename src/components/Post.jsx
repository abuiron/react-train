import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Loader from './Loader'
import Notfound from './Notfound';

function Post() {
  const [posts, setPosts] = useState(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/posts")
        .then((res) => {
          if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
          return res.json();
        })
        .then(data => setPosts(data))
        .catch((err) => {
          console.error("Fetch error:", err.message);
          setErr(err);
        });
    }, 1000);
  }, []);

  if (!posts) {
    return (
    <>
    {!err && <Loader />}
    {err && <Notfound error={"Fetch Error"} />}
    </>
    )
  }

  // Color variants to cycle through
  const variants = [
    'Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Light', 'Dark'
  ];

  return (
    <>
      {posts && posts.map((post, i) => {
        const variant = variants[i % variants.length]; // Cycle through variants

        return (
          <Card
            bg={variant.toLowerCase()}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ height: "27rem",width: '18rem',overflow:"scroll" }}
            className="mb-3"
            key={post.id}
          >
            <Card.Header>{variant} Theme</Card.Header>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

export default Post;
