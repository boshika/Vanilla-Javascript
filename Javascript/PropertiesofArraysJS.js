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

//JS ACCESSOR FUNCTIONS
//indexof and lastindexof

var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
putstr("Enter a name to search for: ");
var name = readline();
var position = names.indexOf(name);

if (position >= 0) {
 console.log("Found " + name + " at position " + position);
} else {
 console.log(name + " not found in array.");
}

//Found Cynthia at position 1
//Joe not found in array

var names = ["David", "Mike", "Cynthia", "Raymond", "Clayton", "Mike",
 "Jennifer"];
var name = "Mike";
var firstPos = names.indexOf(name);
console.log("First found " + name + " at position " + firstPos);
var lastPos = names.lastIndexOf(name);
console.log("Last found " + name + " at position " + lastPos);

//First found Mike at position 1
//Last found Mike at position 5

//String Representations of Arrays: join(), and toString()

var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var namestr = names.join();
console.log(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer
namestr = names.toString();
console.log(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer

//Creating New Arrays from Existing Arrays: splice(), and concat()

var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];

var itdept = cisDept.concat(dmpDept);
// console.log(itdept);
//[ 'Mike', 'Clayton', 'Terrill', 'Danny', 'Jennifer', 'Raymond', 'Cynthia', 'Bryan' ]
var findep= itdept.concat(cisDept);
console.log(findep);
// [ 'Mike',
//   'Clayton',
//   'Terrill',
//   'Danny',
//   'Jennifer',
//   'Raymond',
//   'Cynthia',
//   'Bryan',
//   'Mike',
//   'Clayton',
//   'Terrill',
//   'Danny',
//   'Jennifer' ]

