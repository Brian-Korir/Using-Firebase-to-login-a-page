/*===imports===*/
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";
/*===Firebase setup===*/
/* IMPORTANT: Replace this with your own firebaseConfig when doing challenges */
const firebaseConfig = {
  apiKey: "AIzaSyASJyunjd-33MLfjFHRMgCmr3TB8x5ebj8",
  authDomain: "korir-12.firebaseapp.com",
  projectId: "korir-12",
  storageBucket: "korir-12.appspot.com",
  messagingSenderId: "680093194041",
  appId: "1:680093194041:web:102ee18ad1823a62877ae8",
  measurementId: "G-GP5LL6T0S2"
};
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
/* Challenge: Console log the projectId by using app.options.projectId */

const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")
const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")
const emailInputEl = document.getElementById("email-input")
