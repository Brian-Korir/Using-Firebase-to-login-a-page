/*===imports===*/
import { initializeApp } from "firebase/app"
/*===Firebase setup===*/
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
console.log(app)
