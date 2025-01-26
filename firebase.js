import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-AEvUlq2clbxh_P-fsYHggq2GkagHP4s",
  authDomain: "brotherinchrist-d808b.firebaseapp.com",
  projectId: "brotherinchrist-d808b",
  storageBucket: "brotherinchrist-d808b.firebasestorage.app",
  messagingSenderId: "514069097035",
  appId: "1:514069097035:web:79df608b4679be3c63fbce",
  measurementId: "G-W3XBXYV5X9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
