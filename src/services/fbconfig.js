// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5KyY3y-Qi967chwaIFKTitjWRnhMkkd4",
    authDomain: "burgerqueenclient.firebaseapp.com",
    projectId: "burgerqueenclient",
    storageBucket: "burgerqueenclient.appspot.com",
    messagingSenderId: "741581082091",
    appId: "1:741581082091:web:568b48557a9b4a61b2ddae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;