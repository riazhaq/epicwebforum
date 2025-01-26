import { useEffect, useState } from 'react';
import { fetchCommentsFromDatabase } from './database';
import './App.css';

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const fetchedComments = await fetchCommentsFromDatabase();
        setComments(fetchedComments);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="comments-page">
      <h1>All Comments</h1>
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="comment-item">
              <strong>{comment.userName}</strong>: {comment.comment}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Comments;
