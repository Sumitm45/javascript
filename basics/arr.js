let arr=[265, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];     
//let narr=arr.splice(1,5);
//console.log(narr); // [3, 4, 5, 6, 7]
//console.log(arr); // [265, 8, 9, 10, 11, 12, 13, 14, 15]
let farr=arr.slice(1,5);
console.log(farr); // [3, 4, 5, 6]
console.log(arr); // [265, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
arr.push(289);
console.log(arr);
// [265, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 289]
arr.pop();
console.log(arr);
// [265, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
arr.unshift(23);
console.log(arr);
// [23, 265, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
arr.shift();
console.log(arr);   
// [265, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let arr1=arr.concat([1,2,3]); 
console.log(arr1);
// [265, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 1, 2, 3]
arr.join();
// "265,3,4,5,6,7,8,9,10,11,12,13,14,15"
console.log(arr.join());
// "265,3,4,5,6,7,8,9,10,11,12,13,14,15"


