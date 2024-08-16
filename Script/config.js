import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDRVDQiTD_Dt96KAy-pz6owLJVzRhFAfwg",
  authDomain: "sell-buy-3cba4.firebaseapp.com",
  projectId: "sell-buy-3cba4",
  storageBucket: "sell-buy-3cba4.appspot.com",
  messagingSenderId: "127088576127",
  appId: "1:127088576127:web:986e8273bf859c56a4214a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export{
    auth
}