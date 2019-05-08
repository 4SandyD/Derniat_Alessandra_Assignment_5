/*eslint-env browser*/


// 1. ADD EVENT LISTENER TO WINDOW OBJECT ON LOAD
window.addEventListener("load", init());


// 2. CREATE INIT (USER DEFINED FUNCTION) TO HANDLE ALL EVENT LISTENERS FOR EVERY CALCULATOR BUTTON
// 4. WITHIN INIT() ATTACH EVENT LISTENER TO EACH BUTTON; LISTEN FOR CLICK; CALL ENTER()
// 5. FOR EQUAL BUTTON, CALL CALCULATE; NO ARGUMENTS

function init() {
  var enterButtons = ["seven", "eight", "nine",
                    "divide", "four", "five",
                    "six", "multiply", "one",
                    "two", "three", "subtract",
                    "zero", "period", "add"];
  for (var i = 0; i < enterButtons.length; i++) {
    	var button = enterButtons[i];
		$(button).addEventListener("click", enter($(button).value));
  }
  $("equal").addEventListener("click", calculate());
}


// // 1. ADD EVENT LISTENER TO WINDOW OBJECT ON LOAD
// window.addEventListener("load", init());

// // 2. CREATE INIT (USER DEFINED FUNCTION) TO HANDLE ALL EVENT LISTENERS FOR EVERY CALCULATOR BUTTON
// // 4. WITHIN INIT() ATTACH EVENT LISTENER TO EACH BUTTON; LISTEN FOR CLICK; CALL ENTER()
// // 5. FOR EQUAL BUTTON, CALL CALCULATE; NO ARGUMENTS
// function init() {
//   $("seven").addEventListener("click", enter($("seven").value));
//   $("eight").addEventListener("click", enter($("eight").value));
//   $("nine").addEventListener("click", enter($("nine").value));
//   $("divide").addEventListener("click", enter($("divide").value));
//   $("four").addEventListener("click", enter($("four").value));
//   $("five").addEventListener("click", enter($("five").value));
//   $("six").addEventListener("click", enter($("six").value));
//   $("multiply").addEventListener("click", enter($("multiply").value));
//   $("one").addEventListener("click", enter($("one").value));
//   $("two").addEventListener("click", enter($("two").value));
//   $("three").addEventListener("click", enter($("three").value));
//   $("subtract").addEventListener("click", enter($("subtract").value));
//   $("zero").addEventListener("click", enter($("zero").value));
//   $("period").addEventListener("click", enter($("period").value));
//   $("add").addEventListener("click", enter($("add").value));
//   $("equal").addEventListener("click", calculate());
// }

// 3. CREATE ANONYMOUS HELPER FUNCTION
function $(id) {
  return document.getElementById(id);
}

// 6. CREATE USER-DEFINED FUNCTION CALLED ENTER()
// 7. GET RESULT TEXT BOX BY ID, SET ITS VALUE += TO THE VAL PARAM BEING PASSED IN
function enter(val) {
  return function() { $("result").value += val; };
} 

// 8. CREATE USER-DEFINED FUNCTION CALLED CALCULATE
function calculate() {
  return function () {
    var val = $("result").value;   // Saving the 3 + 3
    $("result").value = eval(val); // eval('3 + 3')
  };
}

