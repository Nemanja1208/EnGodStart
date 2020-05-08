export default function ideapage(){

let body = document.getElementById("body");

//Deleting the plan page or home page

let planpage = document.getElementById("planpageid");
let statspage = document.getElementById("statspageid");

//Checking if Plan page is printed/clicked
if(planpage == null){

} else {
body.removeChild(planpage);
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

//Printing out the Idea Page

let ideapage = document.createElement("div");
ideapage.setAttribute("class", "container");
ideapage.id = "ideapageid";

//Header
let headerdiv = document.createElement("div");
headerdiv.style.marginTop = "100px";
headerdiv.setAttribute("class", "container text-center text-light");
let headerimage = document.createElement("img");
headerimage.src = "https://staffleverage.com/wp-content/uploads/2019/02/7-Ways-to-achieve-successJapanese-staff-leverage-blog.jpg";
let header = document.createElement("h1");
header.style.marginTop= "40px";
header.innerHTML = "Welcome to the Idea on how we help solve food waste problem";
let headertext = document.createElement("h3");
headertext.style.marginTop = "50px";
headertext.innerHTML = "As a modern day solution and btw the most effective and productive, we have developed an app that helps reduce food waste. Features of the app are very simple to use and the result is visible in just 5 simple steps.";
headerdiv.appendChild(headerimage);
headerdiv.appendChild(header);
headerdiv.appendChild(headertext);

//Steps
let mainideapagediv = document.createElement("div");
mainideapagediv.setAttribute("class", "row justify-content-around text-dark");
mainideapagediv.style.marginTop = "40px";

//Card 1
    let carddiv = document.createElement("div");
    carddiv.setAttribute("class", "card col-md4 shadow-lg p-3 mb-5 bg-black rounded text-center ");
    carddiv.style.width = "330px";
    carddiv.style.height = "500px";
    carddiv.id = "firstcardstep";
    let cardimage = document.createElement("img");
    cardimage.src = "https://www.alphabetsecretarial.co.uk/wp-content/uploads/transcription-steps.jpg";
    cardimage.style.height = "300px";
    cardimage.style.width = "300px";
    cardimage.setAttribute("class", "card-img-top");
    let cardbodydiv = document.createElement("div");
    cardbodydiv.setAttribute("class", "card-body shadow-lg p-3 mb-5 bg-black rounded");
    let cardtitle = document.createElement("h4");
    cardtitle.setAttribute("class", "card-title shadow-lg p-3 mb-5 bg-black rounded");
    cardtitle.innerHTML = "Step 1 - Register"
    let cardtext = document.createElement("p");
    cardtext.innerText = "Create a account and register yourself as a Donor or as an Organisation that needs food to feed other people";

//Card 2

    let carddiv1 = document.createElement("div");
    carddiv1.setAttribute("class", "card col-md4 shadow-lg p-3 mb-5 bg-black rounded text-center ");
    carddiv1.style.width = "330px";
    carddiv1.style.height = "500px";
    carddiv1.id = "secondcardstep";
    let cardimage1 = document.createElement("img");
    cardimage1.src = "https://d3qg9zffrnl4ph.cloudfront.net/static/build/sites/images/d3e907c94aea09975ca830971f14dd94.png";
    cardimage1.style.height = "300px";
    cardimage1.style.width = "300px";
    cardimage1.setAttribute("class", "card-img-top");
    let cardbodydiv1 = document.createElement("div");
    cardbodydiv1.setAttribute("class", "card-body shadow-lg p-3 mb-5 bg-black rounded");
    let cardtitle1 = document.createElement("h4");
    cardtitle1.setAttribute("class", "card-title shadow-lg p-3 mb-5 bg-black rounded");
    cardtitle1.innerHTML = "Step 2a - Set up a LIST";
    let cardtext1 = document.createElement("p");
    cardtext1.innerText = "Make a LIST of what type of food you are donating , amount and expiration date.";

//Card 3

let carddiv2 = document.createElement("div");
carddiv2.setAttribute("class", "card col-md4 shadow-lg p-3 mb-5 bg-black rounded text-center ");
carddiv2.style.width = "330px";
carddiv2.style.height = "500px";
carddiv2.id = "thirdcardstep";
let cardimage2 = document.createElement("img");
cardimage2.src = "https://assets.aftership.com/couriers/svg/thailand-post.svg";
cardimage2.style.height = "300px";
cardimage2.style.width = "300px";
cardimage2.setAttribute("class", "card-img-top");
let cardbodydiv2 = document.createElement("div");
cardbodydiv2.setAttribute("class", "card-body shadow-lg p-3 mb-5 bg-black rounded");
let cardtitle2 = document.createElement("h4");
cardtitle2.setAttribute("class", "card-title shadow-lg p-3 mb-5 bg-black rounded");
cardtitle2.innerHTML = "Step 2b - Post the LIST as well as your Location";
let cardtext2 = document.createElement("p");
cardtext2.innerText = "Make a post so other people can see and be informed";

//Card 4
let carddiv3 = document.createElement("div");
carddiv3.setAttribute("class", "card col-md4 shadow-lg p-3 mb-5 bg-black rounded text-center ");
carddiv3.style.width = "330px";
carddiv3.style.height = "500px";
carddiv3.id = "fourthcardstep";
let cardimage3 = document.createElement("img");
cardimage3.src = "https://miro.medium.com/max/1200/1*8bgnYpTJffO4FMfFdFlXrw.png";
cardimage3.style.height = "300px";
cardimage3.style.width = "300px";
cardimage3.setAttribute("class", "card-img-top");
let cardbodydiv3 = document.createElement("div");
cardbodydiv3.setAttribute("class", "card-body shadow-lg p-3 mb-5 bg-black rounded");
let cardtitle3 = document.createElement("h4");
cardtitle3.setAttribute("class", "card-title shadow-lg p-3 mb-5 bg-black rounded");
cardtitle3.innerHTML = "Step 3 - Organisation Contact";
let cardtext3 = document.createElement("p");
cardtext3.innerText = "Organisation is going to contact you about the food in question";

//Card 5

let carddiv4 = document.createElement("div");
carddiv4.setAttribute("class", "card col-md4 shadow-lg p-3 mb-5 bg-black rounded text-center ");
carddiv4.style.width = "330px";
carddiv4.style.height = "500px";
carddiv4.id = "fifthcardstep";
let cardimage4 = document.createElement("img");
cardimage4.src = "https://miro.medium.com/max/2458/1*S_UXWSkbGHU36q6ax5BEWw.jpeg";
cardimage4.style.height = "300px";
cardimage4.style.width = "300px";
cardimage4.setAttribute("class", "card-img-top");
let cardbodydiv4 = document.createElement("div");
cardbodydiv4.setAttribute("class", "card-body shadow-lg p-3 mb-5 bg-black rounded");
let cardtitle4 = document.createElement("h4");
cardtitle4.setAttribute("class", "card-title shadow-lg p-3 mb-5 bg-black rounded");
cardtitle4.innerHTML = "Step 4 - Set up a PICK-UP Location";
let cardtext4 = document.createElement("p");
cardtext4.innerText = "Make a deal about the pick-up location and other terms";

//Card 6

let carddiv5 = document.createElement("div");
carddiv5.setAttribute("class", "card col-md4 shadow-lg p-3 mb-5 bg-black rounded text-center ");
carddiv5.style.width = "330px";
carddiv5.style.height = "500px";
carddiv5.id = "fifthcardstep";
let cardimage5 = document.createElement("img");
cardimage5.src = "https://cdn3.iconfinder.com/data/icons/round-flat-blue-vol-1/100/Achievement_Goal_Mission_Vision_Winner_Prize_Cup-512.png";
cardimage5.style.height = "300px";
cardimage5.style.width = "300px";
cardimage5.setAttribute("class", "card-img-top");
let cardbodydiv5 = document.createElement("div");
cardbodydiv5.setAttribute("class", "card-body shadow-lg p-3 mb-5 bg-black rounded");
let cardtitle5 = document.createElement("h4");
cardtitle5.setAttribute("class", "card-title shadow-lg p-3 mb-5 bg-black rounded");
cardtitle5.innerHTML = "Step 5 - Achievement";
let cardtext5 = document.createElement("p");
cardtext5.innerText = "Job is done, you made the world a little bit better";

//Appending Card 1
    cardbodydiv.appendChild(cardtitle);
    cardbodydiv.appendChild(cardtext);
    carddiv.appendChild(cardimage);
    carddiv.appendChild(cardbodydiv);

//Appending Card 2
    cardbodydiv1.appendChild(cardtitle1);
    cardbodydiv1.appendChild(cardtext1);
    carddiv1.appendChild(cardimage1);
    carddiv1.appendChild(cardbodydiv1);
//Appending Card 3
    cardbodydiv2.appendChild(cardtitle2);
    cardbodydiv2.appendChild(cardtext2);
    carddiv2.appendChild(cardimage2);
    carddiv2.appendChild(cardbodydiv2);
//Appending Card 4
    cardbodydiv3.appendChild(cardtitle3);
    cardbodydiv3.appendChild(cardtext3);
    carddiv3.appendChild(cardimage3);
    carddiv3.appendChild(cardbodydiv3);
//Appending Card 5
    cardbodydiv4.appendChild(cardtitle4);
    cardbodydiv4.appendChild(cardtext4);
    carddiv4.appendChild(cardimage4);
    carddiv4.appendChild(cardbodydiv4);

//Appending Card 6
    cardbodydiv5.appendChild(cardtitle5);
    cardbodydiv5.appendChild(cardtext5);
    carddiv5.appendChild(cardimage5);
    carddiv5.appendChild(cardbodydiv5);

//Appending the completed divs
    mainideapagediv.appendChild(carddiv);
    mainideapagediv.appendChild(carddiv1);
    mainideapagediv.appendChild(carddiv2);
    mainideapagediv.appendChild(carddiv3);
    mainideapagediv.appendChild(carddiv4);
    mainideapagediv.appendChild(carddiv5);
    ideapage.appendChild(headerdiv);
    ideapage.appendChild(mainideapagediv);
    body.appendChild(ideapage);




console.log("Idea page works")

}