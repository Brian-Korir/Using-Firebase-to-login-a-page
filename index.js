/*===imports===*/
import { initializeApp } from "firebase/app"
import { getAuth,
       createUserWithEmailAndPassword} from "firebase/auth";
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
const passwordInputEl = document.getElementById("password-input")
const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")
/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)

signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

/* === Main Code === */

showLoggedOutView()

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithGoogle() {
    console.log("Sign in with Google")
}

function authSignInWithEmail() {
    console.log("Sign in with email and password")
}

function authCreateAccountWithEmail() {
    /*  Challenge:
		Import the createUserWithEmailAndPassword function from 'firebase/auth'

        Use the code from the documentaion to make this function work.
        
        Make sure to first create two consts, 'email' and 'password', to fetch the values from the input fields emailInputEl and passwordInputEl.
       
        If the creation of user is successful then you should show the logged in view using showLoggedInView()
        If something went wrong, then you should log the error message using console.error.
    */
   

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user
            // ...
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            // ..
        })
}

/* == Functions - UI Functions == */

function showLoggedOutView() {
    hideElement(viewLoggedIn)
    showElement(viewLoggedOut)
}

function showLoggedInView() {
    hideElement(viewLoggedOut)
    showElement(viewLoggedIn)
}

function showElement(element) {
    element.style.display = "flex"
}

function hideElement(element) {
    element.style.display = "none"
}






