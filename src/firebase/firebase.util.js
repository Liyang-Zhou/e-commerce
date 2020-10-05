import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCmTWJnht324Z2EoYZvMwCiHmGtRBguuvc",
    authDomain: "crown-db-qrw.firebaseapp.com",
    databaseURL: "https://crown-db-qrw.firebaseio.com",
    projectId: "crown-db-qrw",
    storageBucket: "crown-db-qrw.appspot.com",
    messagingSenderId: "480866649742",
    appId: "1:480866649742:web:233dcfd8f8d3e5509cebdf",
    measurementId: "G-6YCEX8T1FS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;