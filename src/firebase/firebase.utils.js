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

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;