import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { postId } = useParams();
  return <h2>Displaying blog post #{postId}</h2>;
}
