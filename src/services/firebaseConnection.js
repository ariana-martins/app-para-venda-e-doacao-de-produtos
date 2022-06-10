// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getFirestore } from firebase/firestore;
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDprnRPrz2nDNM6WQ3aNh4vF1eclkTsbpE",
    authDomain: "meus-pertences.firebaseapp.com",
    databaseURL: "https://meus-pertences.firebaseio.com",
    projectId: "meus-pertences",
    storageBucket: "meus-pertences.appspot.com",
    messagingSenderId: "194889366503",
    appId: "1:194889366503:web:4cf8684c5939582ca3db42",
    measurementId: "G-6SQ92X99R0"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {
  // Check for user status
});




//Na hora de configurar o firebase e firebaseStore, 
//não esquecer de incluir o export aqui esse estilo ou o outro export que fica na parte inferior do código:
// export default firebaseConnection; 

// ou 

/* 
  export default function firebaseConnection(){
  return(

  );
};
*/

