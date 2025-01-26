import { useState } from 'react';
import { auth, googleProvider, signInWithPopup } from './firebase';
import { addCommentToDatabase } from './database';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handlePostComment = async () => {
    if (!comment.trim()) return alert('Comment cannot be empty!');
    try {
      await addCommentToDatabase(user.displayName, comment);
      alert('Comment posted successfully!');
      setComment('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const handleViewComments = () => {
    window.location.href = '/comments'; // Navigate to the comments page
  };

  return (
    <>
      <header>
        <h1>Welcome to CodeConnect Forum</h1>
      </header>
      <main>
        <section className="welcome">
          <h2>Your go-to platform for coding discussions and knowledge sharing</h2>
          {!user ? (
            <button onClick={handleGoogleSignIn} className="google-button">
              Sign in with Google to Join the Community
            </button>
          ) : (
            <div>
              <p>Welcome back, {user.displayName}!</p>
              <img src={user.photoURL} alt="User profile" className="user-profile-pic" />
            </div>
          )}
        </section>

        <section className="comments">
          <h2>Post a Comment</h2>
          {user ? (
            <>
              <textarea
                placeholder="Write your comment here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="comment-box"
              ></textarea>
              <button onClick={handlePostComment} className="post-button">
                Post Comment
              </button>
              <button onClick={handleViewComments} className="view-comments-button">
                View All Comments
              </button>
            </>
          ) : (
            <p>Please sign in to post a comment.</p>
          )}
        </section>
      </main>

      <footer>
        <p>Made with ❤️ using React, Vite, and ChatGPT</p>
      </footer>
    </>
  );
}

export default App;

