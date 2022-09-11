let albumButton = document.querySelectorAll("#album-button");

let hidden = document.querySelector(".white-back");
let audio0 = document.querySelector("audio");
let img = document.querySelector("#flower-img")
let wholeContainer = document.querySelector("#player-image");


function playButton(){
    if(audio0.paused)
    {
        audio0.play()
    }
    else{
        audio0.pause();
    }
}

function theActualEffect(){
    wholeContainer.classList.toggle("fade-in-animation");
    if(wholeContainer.classList != "fade-in-animation"){
        wholeContainer.classList.toggle("other-animation")
    }
    
}

function fadeIn(){
        hidden.style.display = "inline-block";
        img.src = "/images/ujico-flowers.jpg"; 
        audio0.src="/audio/intro.mp3"; 
        playButton();
}

function fadeIn1(){
        hidden.style.display = "inline-block";
        img.src = "/images/morning-glory.jpeg";
        audio0.src="/audio/morning-glory.mp3"; 
        playButton();
}

function fadeIn2(){
    hidden.style.display = "inline-block";
    img.src = "/images/dhalia.jpg";
    audio0.src="/audio/dhalia.mp3"; 
    playButton();
}

function fadeIn3(){
    hidden.style.display = "inline-block";
    img.src = "/images/lycoris.jpg";
    audio0.src="/audio/lycoris.mp3"; 
    playButton();
}

function fadeIn4(){
    hidden.style.display = "inline-block";
    img.src = "/images/sunflower.jpg";
    audio0.src="/audio/sunflower.mp3"; 
    playButton();
}

function fadeIn5(){
    hidden.style.display = "inline-block";
    img.src = "/images/queenofthenight3.jpg";
    audio0.src="/audio/queen-of-the-night.mp3"; 
    playButton();
}

function fadeIn6(){
    hidden.style.display = "inline-block";
    img.src = "/images/hydrangea.jpg";
    audio0.src="/audio/hydrangea.mp3"; 
    playButton();
}

function fadeIn7(){
    hidden.style.display = "inline-block";
    img.src = "/images/lotus.jpg";
    audio0.src="/audio/lotus.mp3"; 
    playButton();
}

function fadeIn8(){
    hidden.style.display = "inline-block";
    img.src = "/images/lily.jpg";
    audio0.src="/audio/lily.mp3"; 
    playButton();
}

function fadeIn9(){
    hidden.style.display = "inline-block";
    img.src = "/images/carnation.jpg";
    audio0.src="/audio/carnation.mp3"; 
    playButton();
}

albumButton[0].addEventListener("click", fadeIn);
albumButton[1].addEventListener("click", fadeIn1);
albumButton[2].addEventListener("click", fadeIn2);
albumButton[3].addEventListener("click", fadeIn3);
albumButton[4].addEventListener("click", fadeIn4);
albumButton[5].addEventListener("click", fadeIn5);
albumButton[6].addEventListener("click", fadeIn6);
albumButton[7].addEventListener("click", fadeIn7);
albumButton[8].addEventListener("click", fadeIn8);
albumButton[9].addEventListener("click", fadeIn9);


// interactoin for the image showcase

let clickFlower = document.querySelectorAll("#flower-image");

let contentFlower = document.querySelectorAll("#flower-content")

let even = document.querySelectorAll("#number-even")

console.log(even);
function notHidden(){
    contentFlower[0].style.setProperty("display", "block", "important");
    even[0].classList.add("evenEffect");
}

function notHidden1(){
    contentFlower[1].style.setProperty("display", "block", "important");
    even[1].classList.add("evenEffect");
}

function notHidden2(){
    contentFlower[2].style.setProperty("display", "block", "important");
    even[2].classList.add("evenEffect");
}

function notHidden3(){
    contentFlower[3].style.setProperty("display", "block", "important");
    even[3].classList.add("evenEffect");
}

function notHidden4(){
    contentFlower[4].style.setProperty("display", "block", "important");
    even[4].classList.add("evenEffect");
}

function notHidden5(){
    contentFlower[5].style.setProperty("display", "block", "important");
    even[5].classList.add("evenEffect");
}

function notHidden6(){
    contentFlower[6].style.setProperty("display", "block", "important");
    even[6].classList.add("evenEffect");
}

function notHidden6(){
    contentFlower[6].style.setProperty("display", "block", "important");
    even[6].classList.add("evenEffect");
}

function notHidden7(){
    contentFlower[7].style.setProperty("display", "block", "important");
    even[7].classList.add("evenEffect");
}

function notHidden8(){
    contentFlower[8].style.setProperty("display", "block", "important");
    even[8].classList.add("evenEffect");
}

function notHidden9(){
    contentFlower[9].style.setProperty("display", "block", "important");
    even[9].classList.add("evenEffect");
}

clickFlower[0].addEventListener("click", notHidden);
clickFlower[1].addEventListener("click", notHidden1);
clickFlower[2].addEventListener("click", notHidden2);
clickFlower[3].addEventListener("click", notHidden3);
clickFlower[4].addEventListener("click", notHidden4);
clickFlower[5].addEventListener("click", notHidden5);
clickFlower[6].addEventListener("click", notHidden6);
clickFlower[7].addEventListener("click", notHidden7);
clickFlower[8].addEventListener("click", notHidden8);
clickFlower[9].addEventListener("click", notHidden9);

// for first flower: morning glory

// let clickFlowerOdd = document.querySelectorAll("#flower-image-odd");

// let contentFlowerOdd = document.querySelectorAll("#flower-content-odd");

// let odd = document.querySelectorAll("number-odd");

// function notHiddenOdd(){
//     contentFlowerOdd[0].style.setProperty("display", "block", "important");
//     odd[0].classList.add("evenEffect");
// }

// clickFlowerOdd[0].addEventListener("click", notHiddenOdd);
