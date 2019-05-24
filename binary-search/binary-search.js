'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let i = Math.floor(array.length/2);
	if(array[i] === target) {
		return true;
	} else if(!array.length) {
		return false;
	} else {
		if(target > array[i]) {
			const newArray = array.slice(i+1);
			return binarySearch(newArray, target)
		} else if(target < array[i]) {

			const newArray = array.slice(0, i);

			return binarySearch(newArray, target);
		}
	}
	
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch