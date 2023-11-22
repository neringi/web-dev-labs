
// Select benefits-list parent by using id
const benefitparent = document.querySelector("#benefits-list-id");
console.log(benefitparent);

// Select the children of benefits-list
const benefitchildren = benefitparent.childNodes;
console.log(benefitchildren);

// Get the length of the array holding benefits-list children
const benefitslength = benefitchildren.length;
console.log(benefitslength);


//remove the list
benefitparent.removeChild(benefitchildren[benefitslength-2]);