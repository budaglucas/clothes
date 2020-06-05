import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB3vr4FJnQPQ3Yet69bmmxR5HURROiaUOE",
    authDomain: "ecommerce-ac6e6.firebaseapp.com",
    databaseURL: "https://ecommerce-ac6e6.firebaseio.com",
    projectId: "ecommerce-ac6e6",
    storageBucket: "ecommerce-ac6e6.appspot.com",
    messagingSenderId: "534470470097",
    appId: "1:534470470097:web:6c81e2a61ce6cc386f18f0",
    measurementId: "G-SRYKJZNFPG"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;