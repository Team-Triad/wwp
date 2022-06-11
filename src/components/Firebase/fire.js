import firebase from "firebase"
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyC85vTySYVYmuQXaZXjs3I4ZJbySdC_o2I",
    authDomain: "worthy-work-provider.firebaseapp.com",
    projectId: "worthy-work-provider",
    storageBucket: "worthy-work-provider.appspot.com",
    messagingSenderId: "890091230010",
    appId: "1:890091230010:web:83c0444a555ec0afb4f603",
    measurementId: "G-X61SPZ9DE1"
  };

  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export var db = firebase.firestore();
var auth = firebase.auth();
export {auth , firebase};
export default fire;