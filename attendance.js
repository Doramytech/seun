import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3AdDqHy-QmMZJQmM7H1JYCc5lkE4RqYk",
  authDomain: "form-cc1be.firebaseapp.com",
  projectId: "form-cc1be",
  storageBucket: "form-cc1be.firebasestorage.app",
  messagingSenderId: "983116624827",
  appId: "1:983116624827:web:8de28f387d67a70426ca9e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const btn = document.getElementById("btn");
const inpt1 = document.getElementById("inpt1");
const inpt2 = document.getElementById("inpt2");
const inpt3 = document.getElementById("inpt3");
const check = document.getElementById("check");

const myp = document.getElementById("myp");
const myp1 = document.getElementById("myp1");
const myp2 = document.getElementById("myp2");
const myp3 = document.getElementById("myp3");
const succes = document.getElementById("successMessage")

btn.onclick = async function (event) {
  event.preventDefault();

  const name = inpt1.value.trim();
  const email = inpt2.value.trim();
  const password = inpt3.value.trim();
  const isChecked = check.checked;

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isStrongPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

  let valid = true;

  // Clear previous messages
  myp.textContent = "";
  myp1.textContent = "";
  myp2.textContent = "";
  myp3.textContent = "";

  if (name === "") {
    myp.textContent = "Enter your name";
    valid = false;
  }

  if (!isValidEmail) {
    myp1.textContent = "Invalid email format";
    valid = false;
  }

  if (!isStrongPassword) {
    myp2.textContent = "Password must be at least 8 characters, include a number and an uppercase letter";
    valid = false;
  }

  if (!isChecked) {
    myp3.textContent = "You must agree to the terms before submitting";
    valid = false;
  }

  if (valid) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await sendEmailVerification(user);
      console.log("Verification email sent.");

      document.getElementById("successMessage").classList.add("show");

      const loader = document.getElementById('loadingOverlay');

      loader.style.display= "flex";
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 3000);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        myp1.textContent = "This email is already registered. Try logging in.";
        myp1.style.color = "red";
      } else {
        alert(error.message);
        console.error("Signup error:", error);
      }
    }
  }

};



inpt2.addEventListener("input", () => {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inpt2.value.trim())) {
    myp1.textContent = "Invalid email format";
  } else {
    myp1.textContent = "";
  }
});

inpt1.addEventListener("input", validateForm);
inpt2.addEventListener("input", validateForm);
inpt3.addEventListener("input", validateForm);
check.addEventListener("change", validateForm);

function validateForm() {
  const name = inpt1.value.trim();
  const email = inpt2.value.trim();
  const password = inpt3.value.trim();
  const isChecked = check.checked;

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isStrongPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

  myp.textContent = name === "" ? "Enter your name" : "";
  myp1.textContent = !isValidEmail ? "Invalid email format" : "";
  myp2.textContent = !isStrongPassword ? "Password must be at least 8 characters, include a number and an uppercase letter" : "";
  myp3.textContent = !isChecked ? "You must agree to the terms before submitting" : "";

  btn.disabled = !(name && isValidEmail && isStrongPassword && isChecked);
}
inpt1.addEventListener("input", async () => {
  const username = inpt1.value.trim();
  if (username.length > 2) {
    const available = await isUsernameAvailable(username);
    usernameError.textContent = available ? "Username is available ✅" : "Username already taken ❌";
    usernameError.style.color = available ? "green" : "red";
  } else {
    usernameError.textContent = "";
  }
});
const db = getFirestore(app);
async function isUsernameAvailable(username) {
  const q = query(collection(db, "users"), where("username", "==", username));
  const snapshot = await getDocs(q);
  return snapshot.empty;
}

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.1
  });

  animatedElements.forEach(el => observer.observe(el));
});






