import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

 
const firebaseConfig = {
    apiKey: "AIzaSyCCwD8SO_blseWzttAQPZSyfryUt8KLHqk",
    authDomain: "website-ef569.firebaseapp.com",
    projectId: "website-ef569",
    storageBucket: "website-ef569.appspot.com",
    messagingSenderId: "416742684104",
    appId: "1:416742684104:web:4f9d4930a07800182ffcfd",
    measurementId: "G-FEBNT88S10"
  };
 
  export const app = firebase.initializeApp(firebaseConfig);

  export const auth = app.auth();

  

  export default app;
