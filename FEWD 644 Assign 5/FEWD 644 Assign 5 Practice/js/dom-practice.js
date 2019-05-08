/*eslint-env browser*/
//jshint esversion: 6

// STEP 1
function myMsg() {
  window.alert("I have been clicked");
}


// STEP 2
var btnTwo = document.getElementById("btn2");
btnTwo.onclick = function() {
  window.alert("I have been clicked");
};


// STEP 3
btn3.addEventListener("click", newMsg);
function newMsg() {
  window.alert("I have been clicked");
}


// STEP 4
btn4.addEventListener("click", function() {
  window.alert("I have been clicked");
});


// STEP 5
window.addEventListener("load", init, false);
function init() {
  btn5.addEventListener("click", function() {
    window.alert("I have been clicked");
  }, false);
}    


//STEP 6
document.getElementById("redirect").addEventListener("click", function(event){
  event.preventDefault();
  window.alert("You clicked on the Google link but we won't let you go there.");
});


//STEP 7
document.getElementById("btn7").addEventListener("click", showText);
  function showText() {
    window.alert("You entered: " + myText.value);
}

//STEP 8


//STEP 9

//STEP 10
