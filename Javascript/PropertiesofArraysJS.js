//shallow copy-> when one array stores only the reference to another array
var nums = [];
for (var i = 0; i < 100; ++i) {
 nums[i] = i+1;
}

var samenums = nums;

nums[0] = 400;
console.log(nums);
console.log(samenums[0]);

//deep copy: create  heler function for this

var copy = function(arr1, arr2) {
  for(var i=0; i<arr1.length; i++) {
    arr2[i] = arr1[i];
  }
}

//re-factor code above to use this new function
var nums = [];

for (var i = 0; i < 100; ++i) {
 nums[i] = i+1;
}

var samenums = [];
copy(nums, samenums);
nums[0] = 400;

console.log(samenums[0]);

