function measureWater(rocks) {
  console.log(
    rocks.reduce(
      (a,b, i ,arr) => {
        if (i > 1) {
          
        }
        if (i > arr.length-3) {
          alert(arr[i]);
        }
      },
      0
    )
  );
  
}

// Tests

var inputs = [
  [2, 5, 1, 3, 1, 2, 1, 7, 7, 6],/*
  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0],
  [7, 0, 1, 3, 4, 1, 2, 1],
  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0],
  [2, 2, 1, 2, 2, 3, 0, 1, 2],
  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8],
  [2, 2, 2, 2, 2]*/
];

var outputs = [17,10,9,10,4,24,0]

for (var i in inputs)
  if (measureWater(inputs[i]) === outputs[i])
    console.log(`Test ${i} passed`)
  else
    console.log(`Test ${i} not passed`)
    
