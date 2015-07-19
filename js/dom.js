

// Hints for the first problem:
//
//   1. Find the button with the ID of `sum-all`
var sumAll = document.getElementById('sum-all');
console.log(sumAll);

//   2. Add an event listener that:
//     - finds the select element by name (use getElementsByName)
var select = document.getElementsByName('prices');
function test(){
console.log(select[0][0].value);

}
sumAll.onclick = test;
//     - passes all of its options to the `sum` function defined in `logic.js`
//     - takes the value returned by the `sum` function and displays it on the page
//
// */
