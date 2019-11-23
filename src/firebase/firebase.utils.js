import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBDVGcJhu4kn6GM8Dne2bznrGO_iMoFc_Q",
  authDomain: "crwn-clothing-dd9ac.firebaseapp.com",
  databaseURL: "https://crwn-clothing-dd9ac.firebaseio.com",
  projectId: "crwn-clothing-dd9ac",
  storageBucket: "crwn-clothing-dd9ac.appspot.com",
  messagingSenderId: "496953153367",
  appId: "1:496953153367:web:9bbfd4b45b474b2cb75012",
  measurementId: "G-P7PQ9YFVR1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;