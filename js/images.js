let images = [
    "https://media.giphy.com/media/14aUO0Mf7dWDXW/giphy.gif", 
    "https://media.giphy.com/media/fHXic5rGbhDOw/giphy.gif", 
    "https://media.giphy.com/media/3o7abm56qOKRf3tl04/giphy.gif"
];

function getImage(images) {
    let randomNumber = Math.floor(Math.random() * images.length);
    let image = images[randomNumber];
    return image;
}

function renderImage() {
    var img = document.createElement("img");
    img.setAttribute("src", getImage(images));
    img.setAttribute("alt", "Image of the moment");
    document.body.appendChild(img);
}

renderImage();