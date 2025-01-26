import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { firebaseApp } from './firebase';

const db = getFirestore(firebaseApp);

// Add a new comment to the database
export const addCommentToDatabase = async (userName, comment) => {
  try {
    const commentsRef = collection(db, 'comments');
    await addDoc(commentsRef, { userName, comment, timestamp: Date.now() });
  } catch (error) {
    throw new Error('Error adding comment to the database: ' + error.message);
  }
};

// Fetch all comments from the database
export const fetchCommentsFromDatabase = async () => {
  try {
    const commentsRef = collection(db, 'comments');
    const snapshot = await getDocs(commentsRef);
    return snapshot.docs.map((doc) => doc.data());
  } catch (error) {
    throw new Error('Error fetching comments: ' + error.message);
  }
};
