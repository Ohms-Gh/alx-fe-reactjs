import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'React Router Deep Dive' },
  { id: 2, title: 'Protected Routes in React' },
  { id: 3, title: 'Dynamic Routing Made Easy' },
];

export default function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
