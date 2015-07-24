function sumAll(){
  var all = getAll();
  var sum = 0;
  for (var i = 0; i < all.length; i++) {
    sum += parseInt(all[i].value);
  }
  print(sum);
}

function sumSelected(){
  var selected = getSelected();
  var summed = 0;
  for (var i = 0; i < selected.length; i++) {
    summed += parseInt(selected[i].value);
  }
  print(summed);
}

function countSelected(){
  var selected = getSelected();
  print(selected.length);
}

function averageSelected(){
  var selected = getSelected();
  var average = 0;
  for (var i = 0; i < selected.length; i++) {
    average += parseInt(selected[i].value);
  }
  average = average/selected.length;
  print(average);
}

function averageAll(){
  var selected = getAll();
  var average = 0;
  for (var i = 0; i < selected.length; i++) {
    average += parseInt(selected[i].value);
  }
  average = average/selected.length;
  print(average);
}
