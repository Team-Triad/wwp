import firebase from "firebase"


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
export default fire;