export default function planpage(){

//Deleting the plan page or home page

let body = document.getElementById("body");

let ideapage = document.getElementById("ideapageid");
let statspage = document.getElementById("statspageid");

//Checking if Idea page is printed/clicked
if(ideapage == null){

} else {
body.removeChild(ideapage);
}

//Checking if Stats page is printed/clicked
if(statspage == null){

} else {
body.removeChild(statspage);
}

let jumbodiv = document.getElementById("jumbo");
let cardsdiv = document.getElementById("cardsdiv");

//Removing the Content
jumbodiv.style.display = "none";
cardsdiv.style.display = "none";


//Image custom

let imagediv = document.createElement("div");
imagediv.setAttribute("class", "container");
let imagesubdiv = document.createElement("div");
imagesubdiv.setAttribute("class", "row justify-content-center");
let image = document.createElement("img");
image.src = "https://alnadeemgroup.com/wp-content/uploads/2019/10/Business-Plan01.jpg";
image.style.height = "600px";
image.style.width = "900px";
imagesubdiv.appendChild(image);
imagediv.appendChild(imagesubdiv);


//Creating a row div with 2 text fields


let planpage = document.createElement("div");
planpage.id = "planpageid";
planpage.setAttribute("class", "container");
planpage.style.marginTop = "100px";
let mainplanpagediv = document.createElement("div");
mainplanpagediv.setAttribute("class", "row text-light");

//First text
let firstplanpagediv = document.createElement("div");
firstplanpagediv.setAttribute("class", "col-sm-6 text-center");
let firstheading = document.createElement("h1");
firstheading.innerHTML = "The Background";
let firstheadingtext = document.createElement("h4");
firstheadingtext.innerHTML = "Food waste has a negative impact on the environment, on the economy, on food security and on nutrition. Before food is even purchased, losses occur due to improper handling, quality deterioration during transport, and inadequate infrastructure for cooling and storage. Fruit and vegetables losses during this stage have been estimated at 2-20 percent in developed countries, and at 24-40 percent in developing countries. High levels of waste result in higher prices for the final product, which could contribute to lower consumption of fruits and vegetables."
let firstheadingsecondtext = document.createElement("h4");
firstheadingsecondtext.innerHTML = "Household food waste is another major concern in the developed world. Consumers in high-income countries discard up to 30 percent of fruit and vegetable purchases and trim products up to 33 percent by weight during household preparation. Furthermore, waste from food packaging is unlikely to be recycled at the household level, having been the least affected category by the four-fold increase in recycling since 1990.";

//Second text
let secondplanpagediv = document.createElement("div");
secondplanpagediv.setAttribute("class", "col-sm-6 text-center");
let secondheading = document.createElement("h1");
secondheading.innerHTML = "The Big Picture";
let secondheadingtext = document.createElement("h4");
secondheadingtext.innerHTML = "Our contribution to the fight is going to be an HOPE (Help Other People Eat) app. App idea is to give a better, more clear connection and communication between the people in need and the people wasting / with excess of food amounts.  The aim is the feeling of giving and knowing that the result is having a huge effect in the world as well as in someone else's life, that is how the donation rate as well as the people's motivation for being involved and making a difference will rise. "
let secondheadingsecondtext = document.createElement("h4");
secondheadingsecondtext.innerHTML = "App is going to be widely used as we are not only aiming for the private/individuals, but the companies and food stores as well as the organisations who provide the food for those in need.  The range of usage of the app is extremly wide. With a simple user-friendly interface with only a few options that show the very clear purpose of the app, development is not going to be time consuming and will be very effective and precise. As the main point of the app is making a world a better place, the app is going to be free, but instead making money of the referral marketing/adverising such as ads and sponsorships of the possibly very same companies involved in the usage of the app.";


//Appending to body

firstplanpagediv.appendChild(firstheading);
firstplanpagediv.appendChild(firstheadingtext);
firstplanpagediv.appendChild(firstheadingsecondtext);
secondplanpagediv.appendChild(secondheading);
secondplanpagediv.appendChild(secondheadingtext);
secondplanpagediv.appendChild(secondheadingsecondtext);

mainplanpagediv.appendChild(firstplanpagediv);
mainplanpagediv.appendChild(secondplanpagediv);
planpage.appendChild(imagediv);
planpage.appendChild(mainplanpagediv);
body.appendChild(planpage);
 console.log("Plan page works");
};