export default function PostList({ posts }) {
  return (
    <div className="post-container">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h4>ID: {post.id}</h4>
          <p>User ID: {post.userId}</p>
          <h4>Title: {post.title}</h4>
          <p>Content: {post.body}</p>
        </div>
      ))}
    </div>
  );
}
