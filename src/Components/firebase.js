import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAJX6xkDhRHhYXVhZfGOj55Bs0ORwbm6RE",
  authDomain: "dippy-dip.firebaseapp.com",
  projectId: "dippy-dip",
  storageBucket: "dippy-dip.appspot.com",
  messagingSenderId: "459021869846",
  appId: "1:459021869846:web:c6fb376bb0b7b382bda637",
});

const auth = app.auth();
const storage = app.storage();

export { storage, auth };
