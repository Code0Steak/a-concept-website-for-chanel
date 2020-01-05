import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC4WTSfvrQPKe2Ya9to34Fkk4TqFHwkml8",
  authDomain: "chanel-clone.firebaseapp.com",
  databaseURL: "https://chanel-clone.firebaseio.com",
  projectId: "chanel-clone",
  storageBucket: "chanel-clone.appspot.com",
  messagingSenderId: "1089371532701",
  appId: "1:1089371532701:web:dffc68a47584a5945a5374",
  measurementId: "G-X5YTWBWTJ6"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
}

export default firebase;