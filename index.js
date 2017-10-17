function measureWater(arr) {
	var water = 0;
	var cursor = 0;

	arr.reduce((prev, next, i) => {
		if(prev <= next) {
			cursor = i;
			return next;
		} else {
			water += prev - next;
			return prev;
		}
	}, 0);
  
	var newArr = arr.splice(cursor);
  
	newArr.reduceRight((right, next) => {
		if(next > right) {
			right = next;
		}
    
		water -= newArr[0] - right;
		return right;
	}, 0); 
  
	return water;
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

for (var i in inputs) {
  console.log(measureWater(inputs[i]));
  if (measureWater(inputs[i]) === outputs[i])
    console.log(`Test ${i} passed`)
  else
    console.log(`Test ${i} not passed`)
}
    
