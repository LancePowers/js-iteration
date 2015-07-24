

// Hints for the first problem:
//
//   1. Find the button with the ID of `sum-all`
var sumAllClick = document.getElementById('sum-all');
sumAllClick.onclick = function(){sumAll();};
var sumSelectedClick = document.getElementById('sum-selected');
sumSelectedClick.onclick = function(){sumSelected();};
var countSelectedClick = document.getElementById('count-selected');
countSelectedClick.onclick = function(){countSelected();};
var averageAllClick = document.getElementById('average-all');
averageAllClick.onclick = function(){averageAll();};
var averageSelectedClick = document.getElementById('average-selected');
averageSelectedClick.onclick = function(){averageSelected();};

//   2. Add an event listener that:
//     - finds the select element by name (use getElementsByName)
function getAll(){
  var select = document.getElementsByName('prices')[0];
  var options = [];
  for (var i = 0; i < select.length; i++) {
      options.push(select[i]);
  }
  return options;
}

function getSelected(){
  var select = document.getElementsByName('prices')[0];
  var options = [];
  for (var i = 0; i < select.length; i++) {
    if(select[i].selected === true){
      options.push(select[i]);
    }
  }
  return options;
}

function print(value){
var answerBlock = document.getElementById('output');
var answer = document.createElement('p');
answer.innerHTML = value;
answerBlock.appendChild(answer);

}

//     - passes all of its options to the `sum` function defined in `logic.js`
//     - takes the value returned by the `sum` function and displays it on the page
//
// */
