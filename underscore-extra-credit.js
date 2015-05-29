//SOLUTIONS

//1. Use _.reduce to multiply all the values in an array.

var input= [4,3];

var answer = _.reduce(input, function(product,num) {return product *=num;}, 1);
console.log(answer);

//2. Use _.reduce to concatenate all strings in an array
var input= ['Steve', 'Sally', 3, 4]

var answer = _.reduce(input, function(a,b) {return a.concat(b)});
console.log(answer);

//3. Write a function that takes an array of names and congratulates them. Make sure to use _.reduce as part of the function.

var input= ['Steve', 'Sally', 'George', 'Gina']

var myfunc = function(thisarr) {
  var newarr =  _.reduce(thisarr, function(a, b) {return a.concat(" " + b);});
  console.log(" Congrats " + " " + newarr);
};

console.log(myfunc(input));

//4._.pluck takes an object and a property name and returns the property name's value. Write your own version called myPluck.

var myObject = {name: "Neil", age: 120, afunc: function() {console.log("howdy");}
};

var myPluck = function(obj, propName){
    console.log(obj[propName]);
};  

myPluck(myObject, 'afunc');

//6. Use _.where on your farm animals from the lecture slides to return all animals who contain the value 3 at the property name space.

var input = [ {speak: function(){console.log('My name is ' + name);}, name: "Tiger", space: 7},  
        {speak: function(){console.log('My name is ' + name);}, name: "Tiger2", space: 1},  
        {speak: function(){console.log('My name is ' + name);}, name: "Tiger3", space: 3},  
        {speak: function(){console.log('My name is ' + name);}, name: "Tiger4", space: 3} ]

var answer = _.where(input, {space: 3});
console.log(answer);

//doing this using the traditional looping methods

var input = [ {speak: function(){console.log('My name is ' + name);}, name: "Tiger", space: 7},  
        {speak: function(){console.log('My name is ' + name);}, name: "Tiger2", space: 1},  
        {speak: function(){console.log('My name is ' + name);}, name: "Tiger3", space: 3},  
        {speak: function(){console.log('My name is ' + name);}, name: "Tiger4", space: 3} ]

//traditional looping method using a function
//METHOD 1: for a know array, use the key name
function thisArray(lookingfor, thisArr) {
    for(var i=0; i<thisArr.length; i++)
       {
            
            if(thisArr[i].space == lookingfor)
              {
                  console.log( thisArr[i]);
               }
       }


}
thisArray(3, input);

//METHOD 2: for a unknow array use indexing method, more flexible as values can be change during function invocation

var input = [ {speak: function(){console.log('My name is ' + name);}, name: "Tiger", space: 7},  
        {speak: function(){console.log('My name is ' + name);}, name: "Tiger2", space: 1},  
        {speak: function(){console.log('My name is ' + name);}, name: "Tiger3", space: 3},  
        {speak: function(){console.log('My name is ' + name);}, name: "Tiger4", space: 3} ]

//traditional looping method using a function

function thisArray(lookingfor, thisArr) {
    for(var i=0; i<thisArr.length; i++)
       {
         for(var key in thisArr[i])
           {
            
            if(thisArr[i][key] == lookingfor)
              {
                  console.log( thisArr[i]);
               }
            }
       }


}
thisArray('Tiger3', input);





