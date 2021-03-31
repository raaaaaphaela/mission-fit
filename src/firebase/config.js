import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCxbeNdB6JR0H0uVAWBIMzmmQbF3zOfZc8",
    authDomain: "mission-fit-ffa2b.firebaseapp.com",
    projectId: "mission-fit-ffa2b",
    storageBucket: "mission-fit-ffa2b.appspot.com",
    messagingSenderId: "1066013337943",
    appId: "1:1066013337943:web:24b48b49642f6f41b8f612"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set Storage
const projectStorage = firebase.storage();

// Set Firestore
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };