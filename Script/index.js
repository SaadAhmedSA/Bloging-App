
import { auth ,db} from './config.js'
import {onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js'
import { addDoc,collection, getDocs,serverTimestamp,query,orderBy} from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'

let nav = document.getElementById("navbar")
let logout = document.getElementById("logout")

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        nav.innerHTML +=`    <button><a href="./dashboard.html">Add blog</a></button>
        <button id="logout">Logout</></button>`
    
    } else {
      nav.innerHTML+=`    <button><a href="./login.html">login</a></button>
`
    }
  });
 
let arr = []
  async function foo(){
    const q = query(collection(db, "Blog"),orderBy("Time", "desc"));
    const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
arr.push(doc.data())
  });


  arr.map((item)=>{
    card.innerHTML+=`
   <div class="w-50">
    <h2>${item.title}</h2>
        <p>${item.content}</p>
        <button>Read blog</button>
        </div>`

  })
  }
  foo()
