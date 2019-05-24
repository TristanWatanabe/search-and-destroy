'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let curr = linkedlist.head;
    let previousValue = {};

    while (curr) {
        if (curr.next === null) {
            return false;
        } else if (previousValue[curr.value]) {
            return true;
        } else {
            previousValue[curr.value] = true;
            curr = curr.next;
        }
    }
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop