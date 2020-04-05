export default function statspage(){

let body = document.getElementById("body");

//Deleting the plan page or home page
let planpage = document.getElementById("planpageid");
let ideapage = document.getElementById("ideapageid");

//Checking if Plan page is printed/clicked
if(planpage == null){

} else {
body.removeChild(planpage);
}

//Checking if Idea page is printed/clicked
if(ideapage == null){

} else {
body.removeChild(ideapage);
}

let jumbodiv = document.getElementById("jumbo");
let cardsdiv = document.getElementById("cardsdiv");

//Removing the Content
jumbodiv.style.display = "none";
cardsdiv.style.display = "none";


//Content for the Statistics page

let statspage = document.createElement("div");
statspage.setAttribute("class", "container text-center");
statspage.id = "statspageid";
statspage.style.marginTop = "50px";


//Carousel
let carouseldiv = document.createElement("div");
carouseldiv.setAttribute("class", "row justify-content-around");
carouseldiv.style.marginTop = "80px";

let carouselsubdiv = document.createElement("div");
carouselsubdiv.setAttribute("class", "carousel slide");
carouselsubdiv.setAttribute("data-ride", "carousel");

let carouselsubsubdiv = document.createElement("div");
carouselsubsubdiv.setAttribute("class", "carousel-inner");

//First item in carousel
let carouselitemdiv = document.createElement("div");
carouselitemdiv.setAttribute("class", "carousel-item active");

let firstimage = document.createElement("img");
firstimage.src = "https://assets.weforum.org/wp-content/uploads/2015/12/Food-waste.png";
firstimage.setAttribute("class", "d-block w-100");

//Second item
let carouselitemdiv1 = document.createElement("div");
carouselitemdiv1.setAttribute("class", "carousel-item");

let secondimage = document.createElement("img");
secondimage.src = "https://1v1d1e1lmiki1lgcvx32p49h8fe-wpengine.netdna-ssl.com/wp-content/uploads/2019/11/1574827021-wasted-food-percentage-map.jpg";
secondimage.setAttribute("class", "d-block w-100");

//Third Item
let carouselitemdiv2 = document.createElement("div");
carouselitemdiv2.setAttribute("class", "carousel-item");

let thirdimage = document.createElement("img");
thirdimage.src = "https://pbs.twimg.com/media/Dbz0dViWkAATRQq.jpg";
thirdimage.setAttribute("class", "d-block w-100");

//Appending
carouselitemdiv.appendChild(firstimage);
carouselitemdiv1.appendChild(secondimage);
carouselitemdiv2.appendChild(thirdimage);

carouselsubsubdiv.appendChild(carouselitemdiv);
carouselsubsubdiv.appendChild(carouselitemdiv1);
carouselsubsubdiv.appendChild(carouselitemdiv2);

carouselsubdiv.appendChild(carouselsubsubdiv);
carouseldiv.appendChild(carouselsubdiv);
statspage.appendChild(carouseldiv);
body.appendChild(statspage);

$('.carousel').carousel()



    console.log("Statistics page works")
}