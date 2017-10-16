function measureWater(rocks) {
  var len = rocks.length;
  var water = 0;
  
  for (var i = 2; i < len; i++) {
    if (rocks[i - 2] > rocks[i - 1] && rocks[i] > rocks[i - 1]) {
      if (rocks[i] > rocks[i - 2])
        water += rocks[i] - rocks[i - 2] + rocks[i - 1];
    }
  }
}

// Tests

var inputs = [
  [2, 5, 1, 3, 1, 2, 1, 7, 7, 6],
  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0],
  [7, 0, 1, 3, 4, 1, 2, 1],
  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0],
  [2, 2, 1, 2, 2, 3, 0, 1, 2],
  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8],
  [2, 2, 2, 2, 2]
];

var outputs = [17,10,9,10,4,24,0]

for (var i in inputs)
  if (measureWater(inputs[i]) === outputs[i])
    console.log(`Test ${i} passed`)
  else
    console.log(`Test ${i} not passed`)
    
