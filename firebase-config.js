import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCjPniBNDgZ8pQd3UiDJfbmfXObd-_GrM4",
    authDomain: "sos-digital.firebaseapp.com",
    projectId: "sos-digital",
    storageBucket: "sos-digital.appspot.com",
    messagingSenderId: "852474540415",
    appId: "1:852474540415:web:13180c3e6b39a385816a4a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };