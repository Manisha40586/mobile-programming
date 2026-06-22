import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

// 🔥 Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCkoS3tiF5M-nGVF1mCFSBrQmRRGdOnkeI",
  authDomain: "rescue-food-1.firebaseapp.com",
  projectId: "rescue-food-1",
  storageBucket: "rescue-food-1.firebasestorage.app",
  messagingSenderId: "191620062348",
  appId: "1:191620062348:web:0809f6c44f54f75d9bafa9",
  measurementId: "G-CXRSFGS05X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Form
const form = document.getElementById("foodForm");
const status = document.getElementById("status");

// Submit event
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "rescue_food_form"), {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      foodType: document.getElementById("foodType").value,
      quantity: document.getElementById("quantity").value,
      pickupTime: document.getElementById("pickupTime").value,
      donationType: document.getElementById("donationType").value,
      organization: document.getElementById("organization").value,
      message: document.getElementById("message").value,
      createdAt: new Date()
    });

    status.innerText = "✅ Submitted successfully!";
    form.reset();

  } catch (error) {
    status.innerText = "❌ Error: " + error.message;
  }
});