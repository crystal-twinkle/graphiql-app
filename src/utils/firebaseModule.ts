import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBcxSC8w0IY6movQiC3BlTRW3AuoiD5IxQ',
  authDomain: 'graphiql-app-87295.firebaseapp.com',
  projectId: 'graphiql-app-87295',
  storageBucket: 'graphiql-app-87295.appspot.com',
  messagingSenderId: '10586008659',
  appId: '1:10586008659:web:899a3906001e6766b6aaa6',
  measurementId: 'G-4308VXV489',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };
