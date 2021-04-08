import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set Storage
const projectStorage = firebase.storage();

// Set Firestore
const db = firebase.firestore();

// Set Auth
const auth = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, db, auth, timestamp };