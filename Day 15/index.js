// javascript

const gallery = document.querySelector(".gallery");
const cards = document.querySelectorAll(".card");
// Buttons
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");


let position = 0;
const forward = -220;

const previousButtonStatus = () => {
    if(position !== 0){
        previous.style.opacity = '1';
    }else{
         previous.style.opacity = '.3';
    }
}
const nextButtonStatus = () => {
    if (position !== (-220 * (cards.length - 1))) {
        next.style.opacity = '1';
    } else if (position === (-220 * (cards.length - 1))) {
        next.style.opacity = '.3';
    }
}
const gallStatus = () => gallery.style.transform = `translateX(${position}px)`;

const nextImage =() => {
    if(position > (-220 * (cards.length -1))){
        position += forward
    }else{
        position = position;
    }
    gallStatus();
    nextButtonStatus();
    previousButtonStatus();
}

const prevIamge = () => {
    if(position < 0){
        position -= forward;
    }else{
        position = position;
    }
    gallStatus();
    nextButtonStatus();
    previousButtonStatus();
}


next.addEventListener("click", nextImage)
previous.addEventListener("click", prevIamge);