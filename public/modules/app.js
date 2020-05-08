import planPage from '../modules/plan.js';
import ideaPage from '../modules/idea.js';
import statsPage from '../modules/statistics.js';

//Printing out Business Plan Page
var planlink = document.getElementById("plan");
var planlink2 = document.getElementById("planlink2")
planlink.onclick = planPage;
planlink2.onclick = planPage;


//Printing out Idea Page
var idealink = document.getElementById("idealink1");
var idealink2 = document.getElementById("idealink2");
idealink.onclick = ideaPage;
idealink2.onclick = ideaPage;

//Printing out Idea Page
var statslink1 = document.getElementById("statslink1");
var statslink2 = document.getElementById("statslink2");
statslink1.onclick = statsPage;
statslink2.onclick = statsPage;