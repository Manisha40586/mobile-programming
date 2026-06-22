import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";

import {
getDatabase,
ref,
push,
set
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBqMoue-y6qJu5oO66vyJUHAvhI815fCWA",
  authDomain: "mobile-application-8303b.firebaseapp.com",
  projectId: "mobile-application-8303b",
  storageBucket: "mobile-application-8303b.firebasestorage.app",
  messagingSenderId: "782909165809",
  appId: "1:782909165809:web:28f6746a35ddb305299950"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

e.preventDefault();

const donationsRef = ref(db, "foodRescueDonations");

const newDonationRef = push(donationsRef);

try {

await set(newDonationRef, {

name: document.getElementById("name").value,
email: document.getElementById("email").value,
phone: document.getElementById("phone").value,
organization: document.getElementById("organization").value,
donationType: document.getElementById("donationType").value,
quantity: document.getElementById("quantity").value,
address: document.getElementById("address").value,
city: document.getElementById("city").value,
date: document.getElementById("date").value,
details: document.getElementById("details").value,
timestamp: new Date().toISOString()

});

document.getElementById("message").innerHTML =
"Donation submitted successfully!";

form.reset();

}
catch(error){

console.error(error);

document.getElementById("message").innerHTML =
"Error saving data.";

}

});