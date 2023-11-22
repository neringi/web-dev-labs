/// this function creates a new image
function createImage(src){
    const image = document.createElement('img');
    image.src = src;
    return image;
}


/// callback function
function onStreamProcessed(text){
    console.log(text);
    ///// split the content line by line
    const urls = text.split('\n');
    ///// iterate each of the value
    for (const url of urls){
        //// create a new image
        const image = createImage(url);
        //// grab the element with an id called album-view
        const albumView = document.querySelector('#album-view');
        //// append the new image to it
        albumView.appendChild(image);
    }
}

/// this function will call if fetch is successful
function onResponse(response){
    console.log(response);
    response.text().then(onStreamProcessed);
}

/// this function will call if fetch fails
function onError(e){

}

// Main
//// fetch API returns a promise where the response object resolves into

fetch('images.txt')
.then(onResponse, onError);




//// lets try and add event listener for clicking on images

let imgClick = document.querySelector("#album-view");

function clickImg(e) {
    console.log(e);
    console.log(e.target);
    let url = e.target.src;

    const image = createImage(url);
    const modalView = document.querySelector('#modal-view');
    modalView.appendChild(image);
}

imgClick.addEventListener('click',clickImg);