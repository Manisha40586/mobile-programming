let foods =
JSON.parse(localStorage.getItem("foods")) || [];
window.onload = () => {
if(localStorage.getItem("loggedIn")){
document.getElementById("loginPage").style.display = "none";
document.getElementById("app").style.display = "block";
}
displayFoods();
updateCounter();
};
function login(){
let user =
document.getElementById("username").value;
let pass =
document.getElementById("password").value;
if(user === "admin" && pass === "1234"){
localStorage.setItem("loggedIn",true);
document.getElementById("loginPage").style.display = "none";
document.getElementById("app").style.display = "block";
}
else{
alert("Username: admin\nPassword: 1234");
}
}
function logout(){
localStorage.removeItem("loggedIn");
location.reload();
}
function addFood(){
let foodName =
document.getElementById("foodName").value;
let category =
document.getElementById("category").value;
let location =
document.getElementById("location").value;
if(foodName==="" || location===""){
alert("Fill all fields");
return;
}
foods.push({
name:foodName,
category:category,
location:location

});

localStorage.setItem(
"foods",
JSON.stringify(foods)
);

displayFoods();

updateCounter();

document.getElementById("foodName").value="";
document.getElementById("location").value="";
}

function displayFoods(){

let foodList =
document.getElementById("foodList");

foodList.innerHTML="";

foods.forEach((food,index)=>{

foodList.innerHTML +=

`<div class="card">

<h3>${food.name}</h3>

<p><b>Category:</b> ${food.category}</p>

<p><b>Location:</b> ${food.location}</p>

<button
class="contact-btn"
onclick="contactDonor()">

Contact Donor

</button>

<button
class="delete-btn"
onclick="deleteFood(${index})">

Delete

</button>

</div>`;

});

}

function deleteFood(index){

foods.splice(index,1);

localStorage.setItem(
"foods",
JSON.stringify(foods)
);

displayFoods();

updateCounter();

}

function contactDonor(){

alert("Contact Request Sent!");

}

function updateCounter(){

document.getElementById("count").innerText =
foods.length;

}

document.addEventListener("keyup",(e)=>{

if(e.target.id==="searchInput"){

let value =
e.target.value.toLowerCase();

document
.querySelectorAll(".card")
.forEach(card=>{

card.style.display =

card.innerText
.toLowerCase()
.includes(value)

? "block"
: "none";

});

}

});

function darkMode(){

document.body.classList.toggle("dark");

}

setInterval(()=>{

document.getElementById("clock").innerHTML =
new Date().toLocaleString();

},1000);