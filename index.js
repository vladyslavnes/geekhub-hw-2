function measureWater(arr) {
	var water = 0;
	var max = arr[0];
	var maxIndex = 0;

	arr.reduce((prev, next, i) => {
		if (arr[i] > max)
			maxIndex = i;
		
		if (next > prev)
			return next;
		else {
			water += prev - next;
			return prev;
		}
	});
	
	arr.splice(maxIndex);
	
		arr.reduceRight((prev, next, i) => { // prev - 0; next - 1
			console.log(prev,next);
			if (next > prev) {
				water -= next - prev;
				return prev;
			}
			else {
				water += prev + next; 
				return next;
			}
	});
	console.log('\n');
	return water;
}
// Tests

var inputs = [
  [2, 5, 1, 3, 1, 2, 1, 7, 7, 6],
  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]
  [7, 0, 1, 3, 4, 1, 2, 1],
  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0],
  [2, 2, 1, 2, 2, 3, 0, 1, 2],
  [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8],
  [2, 2, 2, 2, 2]
];

var outputs = [17,10,9,10,4,24,0]

for (var i in inputs) {
  console.log(`Test #${i} :`,measureWater(inputs[i]),'\n');
//   if (measureWater(inputs[i]) === outputs[i])
//     console.log(`Test ${i} passed`)
//   else
//     console.log(`Test ${i} not passed`)
}
    
