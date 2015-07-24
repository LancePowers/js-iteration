/////////////////Names//////////////////
var nameArray = document.getElementsByName('names')[0].innerHTML.split('\n');

var allNamesClick = document.getElementById('all-names');
var firstNamesClick = document.getElementById('first-names');
var lastNamesClick = document.getElementById('last-names');
var namesWithLengthClick = document.getElementById('names-with-lengths');

allNamesClick.onclick = function(){allNames();};
firstNamesClick.onclick = function(){firstLastNames(0);};
lastNamesClick.onclick = function(){firstLastNames(1);};
namesWithLengthClick.onclick = function(){namesWithLength();};

function printName(valueArr, lengthArr){
  var list = document.getElementById('out');
  list.innerHTML = null;
  for (var i = 0; i < valueArr.length; i++) {
    var listItem = document.createElement('li');
    listItem.innerHTML = valueArr[i] + " " + lengthArr[i];
    list.appendChild(listItem);
  }
}

////////////////Prices//////////////
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


