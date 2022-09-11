let albumButton = document.querySelectorAll("#album-button");

let hidden = document.querySelector(".white-back");
let audio0 = document.querySelector("audio");
let img = document.querySelector("#flower-img")
let container = document.querySelector("#player-img");

console.log(albumButton);

let isPlaying = true;

function playButton(){
    if(audio0.paused)
    {
        audio0.play()
    }
    else{
        audio0.pause();
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



