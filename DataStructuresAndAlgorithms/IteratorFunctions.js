/**
 * Non-Array generating Iterator Functions
 */

//forEach

function square(num) {
    console.log(num, num*num);
}

var nums = [1,2,3,4,5,6,7,8,9,10];
nums.forEach(square);

//every

function isEven(num) {
    return num % 2 == 0;
}
var nums = [2,4,6,8,10];
var even = nums.every(isEven);
if (even) {
    console.log("all numbers are even");
}
else {
    console.log("not all numbers are even");
}

//some

function isEven(num) {
    return num % 2 == 0;
}

var nums = [1,2,3,4,5,6,7,8,9,10];
var someEven = nums.some(isEven);

if (someEven) {
    print("some numbers are even");
}
else {
    print("no numbers are even");
}

nums = [1,3,5,7,9];
someEven = nums.some(isEven);
if (someEven) {
    print("some numbers are even");
}
else {
    print("no numbers are even");
}