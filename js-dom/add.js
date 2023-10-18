
// Select benefits-list parent by using id
const benefitparent = document.querySelector("#benefits-list-id");

//can also use document.getElementById();
const benefitparent2 = document.getElementById("benefits-list-id");
console.log(benefitparent);
console.log(benefitparent2);

// Select the children of benefits-list
const benefitchildren = benefitparent.childNodes;
console.log(benefitchildren);

// Get the length of the array holding benefits-list children
const benefitslength = benefitchildren.length;
console.log(benefitslength);


//remove the list
// benefitparent.removeChild(benefitchildren[benefitslength-2]);


let newli = document.createElement("li");

newli.style.cssText = "color: blue;";

newli.textContent = "Helps improve blood circulation. ";

let sectionList = document.querySelector("#benefits-list-id");

sectionList.insertBefore(newli,benefitchildren[benefitslength-2]);
