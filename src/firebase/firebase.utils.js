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


  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName, email, createdAt, ...additionalData
        })
      }catch(error){
        console.log('error creating user',error.message);
      }
    }
    return userRef;
  }

//Firebase Auth
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

//provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => {
  
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    console.log(token);
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorCode,errorMessage,credential);
    // ...
  })}


export default firebase;