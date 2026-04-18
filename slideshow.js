/*
Source: W3Schools
This page rotates detailing images automatically for the website header or gallery.
*/

var slideImages = [
    "images/car1.jpg",
    "images/car2.jpg",
    "images/car3.jpg"
];

var slideIndex = 0;

function rotateSlides() {
    var slide = document.getElementById("headerSlide");

    if (slide) {
        slide.src = slideImages[slideIndex];
        slideIndex++;

        if (slideIndex >= slideImages.length) {
            slideIndex = 0;
        }
    }
}

setInterval(rotateSlides, 3000);