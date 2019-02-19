import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA1OSXqdqE8mpI0DkEjlYU-FCYl5AdRiBs",
  authDomain: "catch-of-the-day-roger-t.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-roger-t.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;