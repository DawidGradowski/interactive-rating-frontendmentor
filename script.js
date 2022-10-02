// PANELS
const ratingPanel = document.getElementsByClassName("rating-panel")[0];
const thanksPanel = document.getElementsByClassName("thanks-panel")[0];

// RATING PANEL ELEMENTS
const rateBtns = document.getElementsByClassName("rate-btn");
const submitBtn = document.getElementById("submit-btn");

// THANK YOU PANEL ELEMENTS
const yourRating = document.getElementById("rating-numb");

var rateSelected = false;
var currentRate = 0;

for(var i = 0; i < rateBtns.length; i++){
    rateBtns[i].addEventListener("click", click =>{
        clearCurrentRating();
        click.target.classList.add('current-rating');
        currentRate = click.target.value;
        rateSelected = true;
    });
}

function clearCurrentRating(){
    var currentRating = document.getElementsByClassName("current-rating");
    if(currentRating.length == 1){
        currentRating[0].classList.remove('current-rating');
    }
}

submitBtn.addEventListener("click", click => {
    if(rateSelected){
        ratingPanel.classList.add('disappear');
        setTimeout(submitRating, 250);
    }
});

function submitRating(){
    ratingPanel.classList.add('hidden');
    yourRating.innerText = currentRate;
    thanksPanel.classList.remove('hidden');
    thanksPanel.classList.add('show');
}