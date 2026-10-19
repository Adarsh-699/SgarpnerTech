// Write your code below:
const mainHeading = document.getElementById("main-heading");
mainHeading.textContent ="Fruit World";
mainHeading.style.color = "orange";
const header = document.getElementById("header");
header.style.background = "green";
header.style.borderBottom = "solid orange";
const basketHeading = document.getElementById("basket-heading");
basketHeading.style.color = "green";
const thanks = document.getElementById("thanks");
thanks.innerHTML = '<p>Please visit us again</p>';
//Next task.....
const fruit = document.getElementsByClassName("fruit");
fruit[2].style.background = "yellow";
for (let i = 0; i < fruit.length; i++){
    fruit[i].style.fontWeight = "bold";
}