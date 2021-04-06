import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA3qiG_x6DQh93WuZUJWcQLHSE-LMiyHXk",
    authDomain: "discord-clone-d428d.firebaseapp.com",
    databaseURL: "https://discord-clone-d428d.firebaseio.com",
    projectId: "discord-clone-d428d",
    storageBucket: "discord-clone-d428d.appspot.com",
    messagingSenderId: "848275082370",
    appId: "1:848275082370:web:e5d1710a713ea15aa8f89b",
    measurementId: "G-CTS1PB4KCQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;