import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAXuUM8mXAy01Ouecz6El-YeJF930lqPzQ",
  authDomain: "opt-ver-7de68.firebaseapp.com",
  projectId: "opt-ver-7de68",
  storageBucket: "opt-ver-7de68.appspot.com",
  messagingSenderId: "409970441148",
  appId: "1:409970441148:web:f4d300e6a78a84f0c409b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase