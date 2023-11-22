let hamburger = document.querySelector("#hamburger");

function toggleNav() {
    let links = document.querySelector(".mainNav");
    links.classList.toggle('showNav');
}

hamburger.addEventListener('click',toggleNav);

// function mouseoverNav() {
//     let links = document.querySelector("#nav1");
//     nav.style.textcolor = "background-color: #f4f0f4;"
// }


// let nav = document.getElementById("nav1");

// nav.addEventListener('mouseover',mouseoverNav);