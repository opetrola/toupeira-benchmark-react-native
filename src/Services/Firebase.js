// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app"

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth"

// Your app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCU7_ZbahGGrcMI591ixW-akV9Co-0RvZ8",
    authDomain: "toupeira-benchmark.firebaseapp.com",
    databaseURL: "https://toupeira-benchmark.firebaseio.com",
    projectId: "toupeira-benchmark",
    storageBucket: "toupeira-benchmark.appspot.com",
    messagingSenderId: "274657243602",
    appId: "1:274657243602:web:b99947fa4be2fcab3cd80b",
    measurementId: "G-V5CYL9WQ1V"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Finally, export it to use it throughout your app
export default firebase