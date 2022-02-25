import firebase from "firebase/app";
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyA6sgS-4zBDz42xxIdP4eYxBgvzqYbv6Kc",
    authDomain: "sistema-44d05.firebaseapp.com",
    projectId: "sistema-44d05",
    storageBucket: "sistema-44d05.appspot.com",
    messagingSenderId: "845982009257",
    appId: "1:845982009257:web:491f66e04bb03451b666b8",
    measurementId: "G-KHL9N94XY8"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export default firebase
