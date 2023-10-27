let newp = document.createElement("p");

newp.style.cssText = "color: blue;";

newp.textContent = "Hi This is new P! ";

let sectionElement = document.querySelector("section");

sectionElement.parentNode.insertBefore(newp,sectionElement);
