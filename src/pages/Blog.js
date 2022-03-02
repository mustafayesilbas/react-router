import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {[1, 2, 3, 4].map((post, index) => (
          <li key={index}>
            <Link to={`/blog/${post}`}>Post {post}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
