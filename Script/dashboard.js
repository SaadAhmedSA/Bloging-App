
import { auth ,db} from './config.js'
import {onAuthStateChanged  } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js'
import { addDoc,collection, getDocs,serverTimestamp,query,orderBy} from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js'

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
    console.log(uid);
    } else {
     window.location="index.html"
    }
  });
  let form = document.getElementById("submit")
  let card = document.getElementById("card")
  let title = document.getElementById("title")
  let Content = document.getElementById("content")
let arr = []
  form.addEventListener("submit",async(event)=>{
event.preventDefault()
console.log(title.value);
console.log(Content.value);
try {
    const docRef = await addDoc(collection(db, "Blog"), {
      title: title.value,
      content: Content.value,
      Time: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log("Error adding document: ", e);
  }
 
  })
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
        <button>Read blog</button></div>`

  })
  }
  foo()