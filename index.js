function measureWater(arr) {
	var water = 0;
	var max = arr[0];
	var breakIndex = 0;
	
	for (var i = 1, len = arr.length; i < len; i++) {
		if (arr[i] > max) {
			max = arr[i];
			breakIndex = i;
		}
		
		if (max > arr[i] || arr[i + 1] > arr[i]) {
			water += max - arr[i];
		}
	}
	
	var breakArr = arr.splice(breakIndex);
	
	for (var i = breakArr.length - 1; i >= 0; i--) {
		if (breakArr[i] <= breakArr[i + 1])
			breakArr[i] = breakArr[i + 1];
		
		water -= breakArr[0] - breakArr[i];
	}
	
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

var outputs = [17,10,9,10,4,24,0];

for (var i in inputs)
  console.log(`Test #${i} : ${measureWater(inputs[i])} - ${outputs[i]}`);
