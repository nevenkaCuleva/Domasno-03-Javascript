
let firstParagraph= document.querySelector(".paragraph");
firstParagraph.innerText= "This was changed through JS!";


let secondParagraph= document.getElementsByClassName("paragraph second");
secondParagraph[0].innerText= "This was also changed through JS!";


let firstHeader= document.getElementById("myTitle");
firstHeader.innerText= "The first header was changed through JS.";


let allDivs= document.querySelectorAll('div');
let choosingThirdDiv= allDivs[2];

let secondHeader= choosingThirdDiv.firstElementChild;
let thirdHeader= secondHeader.nextElementSibling;

secondHeader.innerText= "The second header was changed through JS.";
thirdHeader.innerText= "The third header was changed through JS.";


