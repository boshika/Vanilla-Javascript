//Undersore Solutions

//1. Use _.each to loop through an array and console.log() all the values. Now use it to console.log() the indices. How would this be different if you were looping through ////an object?

myArr= [2,4,7,89]

myObj ={name:"Boshika", occupation: "student", home: "San Francisco"};

//USING UNDERSCORE JS Library

_.each(myArr, function(values) {
      console.log(values);
});

_.each(myArr,function(index) {console.log(myArr.indexOf(index) + " " + index)});

_.each(myObj, function(value, key) {
     console.log(key + ": " + value);
});

//Traditional for...in loop for iterating through objects

for(var key in myObj)
  {
    console.log(key + " " +myObj[key] );
  }

  //2. Write a function called checkValue that searches an array for a value. It takes an array and a value and returns true if the value exists in the array, otherwise 
  //it returns false.
  
   var helloArr = ['bonjour', 'hello', 'hola'];

//using forEach method, can also be done easilt with a traditional for loop
var checkValue = function(arr, val) {
  arr.forEach(function(value) 
         {if(value == val) {console.log (true);} else {console.log(false);}
        
});
};

checkValue(helloArr, 'adsdasfas')

//3. Rewrite checkValue using _.each. Make sure that you have underscore.js included where you are running your code.

var checkValue = function(arr, val) {
  _(arr).each(function(value) {
        
         if (value == val)
           {return console.log(true);}
       else {return console.log(false);}
  });
};

//4. Write a loop that pushes all the values in an object to an array

input= {two: 2, four: 4, three: 3, twelve: 12};
var thisArr = [];

for(var key in input) 
 {
    thisArr.push(input[key]);
 }

console.log(thisArr);

//5. Use _.map to mimic the previous behavior.

input= {two: 2, four: 4, three: 3, twelve: 12};

var thisarray = [];
_.map(input, function(value) {
     
    thisarray.push(value);
});
console.log(thisarray);

//6. Use _.filter to return all the even numbers in an array.

input= [9,8,7,6,5,2];
newarr = [];
_.filter(input, function(num) {
         if(num%2==0) {newarr.push(num)}
});

console.log(newarr);

//create a new function that would filter all the members of an array based on a function that will pass into this function as a parameter. 

var myarr = [4,5,8,9,6,4];

function doThis(thisArr, myfunc) {myfunc(thisArr);}

var isEven = function(thisArr) {
var newarr = [];
    for(var i= 0; i< thisArr.length; i++)
      {
              if(thisArr[i] % 2 == 0)
                {
                    newarr.push(thisArr[i]);
                }
       }
   console.log(newarr);

};

var isOdd= function(thisArr) {
var newarr = [];
    for(var i= 0; i< thisArr.length; i++)
      {
              if(thisArr[i] % 2 != 0)
                {
                    newarr.push(thisArr[i]);
                }
       }
   console.log(newarr);

};
doThis(myarr,isEven);
doThis(myarr,isOdd);




