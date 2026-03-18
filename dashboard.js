// Import Firebase core and Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore, collection, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyC3AdDqHy-QmMZJQmM7H1JYCc5lkE4RqYk",
  authDomain: "form-cc1be.firebaseapp.com",
  projectId: "form-cc1be",
  storageBucket: "form-cc1be.firebasestorage.app",
  messagingSenderId: "983116624827",
  appId: "1:983116624827:web:8de28f387d67a70426ca9e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
async function markAttendance() {
  const user = auth.currentUser;
  if (!user) return alert("Please log in first");

  await addDoc(collection(db, "attendanceRecords"), {
    userId: user.uid,
    name: user.displayName || user.email,
    timestamp: Timestamp.now()
  });

  alert("Attendance marked successfully!");
}
