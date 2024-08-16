import { auth } from "./config.js"
import {createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js'

let form = document.getElementById("form")
let username = document.getElementById("username")
let email = document.getElementById("email")
let password = document.getElementById("Password")


form.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
 
      const user = userCredential.user;
     console.log(user);
     window.location="login.html"
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      
    });
     email.value=""
    password.value=""
})