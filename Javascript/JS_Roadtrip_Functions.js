//Function expression vs function declaration

//Function Declaration
// function diffofSquares(a,b) {
// 	return a*b;
// } //loads immediately

// //function expression also an anyomous function since no name after function

// var diff = function(a,b) {
// 	return a*b - a*b;

// }; //loads only when program reaches that line of code

// diff(9,5);

// //passing functions as parameter to other functions

// var greeting = function() {
	
// 	alert("Javascript is challenging but fun to learn")
// };

// function call_another_function(message) {
	
// 	message();
// }

// call_another_function(greeting);

// //

// var people = 10;
// var rain = 10;
// var sharks = 4;

// var fearGenerated = function(numPeeps, rainInInches, numSharks) {
//   var rainFear = numPeeps * rainInInches;
//   var sharkFear = numSharks * numSharks * numSharks;
//   var totalFear = sharkFear + rainFear;
//   return totalFear;
// };
// var fear = fearGenerated(people, rain, sharks);
// var fear = fearGenerated(numPeeps, rainInInches, numSharks);

// var fearMessage = function() {
//   // Insert conditional statements here
//   if (fear<200)
//     return confirm("Fear Level: LOW \n Still wanna ride?");
//   if (fear>= 200 && fear <=300)
//     return confirm("Fear Level: MEDIUM \n Think you'll make it?");
//   if (fear> 300 && fear <=400)
//     return confirm("Fear Level: HIGH \n Have a death wish?");

// };

// function confirmRide(confirmToGo) {
//   return confirmToGo();
// }

// // Call confirmRide here
// var startRide = confirmRide(fearMessage);

// //Using Function Expression as Parameter

// //USING FE'S WITH ARRAYS AND MAP[]

// var numbers = [1,4,76,87,9,2,45,6743,45]

// var results = numbers.map(function(cell){
// 		return cell*2;
// });

// var passengers = [ ["Thomas", "Meeks"],
//                    ["Gregg", "Pollack"],
//                    ["Christine", "Wong"],
//                    ["Dan", "McGaw"] ];
// var modifiedNames = passengers.map(function(arrayCell){
// 		return arrayCell[0] + " " + arrayCell[1];
// });

// modifiedNames.map(function (name) {
//                   alert ("Yo, " + name + "!");
//                   });
// //

// var puzzlers = [
//   function(input) {return 3*input - 8;},
//   function(input) {return (input +2) * (input +2) * (input +2);},
//   function(input) {return input * input -9;},
//   function(input) {return input%4;}
// ];

//Returning function from functions and immediate invocation


//call backs 

// function unless(test, then) {
//   if(!test) then();
// }

// function repeat(times, body) {
// for (var i=0; i<times; i++)
//   body(i)
// }

// repeat(3, function(n) {
//     unless(n%2, function() {
//   console.log(n, "is even");
// });

// });

// var flattenThis = function(thisArray) {
//   thisArray.reduce(function(first,last) {
//     first.concat(last);
// });
// };

// var b = [[1,2,3],[2,3,4],[4,5,6]];
// console.log(flattenThis(b));

//UNDERSCORE JS LIBRARY

//_.pluck and _.map

// var Tuts = [{name : 'NetTuts', niche : 'Web Development'}, {name : 'WPTuts', niche : 'WordPress'}, {name : 'PSDTuts', niche : 'PhotoShop'}, {name : 'AeTuts', niche : 'After Effects'}];
// var names = _(Tuts).pluck('name').map(function(value) {return value + "+ this works" ;});

//forEach
// var elements = ["element1", "element2", "element3"];
// elements.forEach(function(element) {
//   // The asynchronous action simulator
//   setTimeout(function() {
//     console.log(element);
//   }, 100);
// });

// var numbers = [1,2,3,4,5,6,7];
// var sum=0;
// numbers.forEach(function(num) {
//     sum += num;
// });
// console.log(sum);

// var names = ["Boshika", "Neil", "Siya-Gayatri"];
// var logNames = function(name) {
//   console.log(name);
// };
// names.forEach(logNames);

// var animalNames = ['Frog', 'Cat','Dog'];
// var farm = [];

// function AnimalMaker(animal) {
//   return console.log ("My name is " + animal);
//   }



// animalNames.forEach(function(name) {
//   farm.push(AnimalMaker(name));
// });
//_.each

// var helloArr = ['bonjour', 'hello', 'hola'];

// var checkValue = function(arr, val) {
//   _(arr).each(function(value) {
        
//          if (value == val)
//            {return console.log(true);}
//        else {return console.log(false);}
//   });
// };

// console.log(checkValue(helloArr,'hola'));

//Write a loop that pushes all the values in an object to an array.

input= {two: 2, four: 4, three: 3, twelve: 12}
var thisArray = [];

for (var key in input) {thisArray.push(input[key]);}
console.log(thisArray);

//Using _.map
input= {two: 2, four: 4, three: 3, twelve: 12}
var thisArray = [];

_.map(input, function(value,key) {
    thisArray.push(input[key]);
});

console.log(thisArray);

//Use _.filter to return all the even numbers in an array.

var input= [9,8,7,6,5,2];
var newarr= [];
_.filter(input, function(num) {
     if (num % 2 == 0) {newarr.push(num);}
      
});
console.log(newarr);

// _.reduce to multiply all the values in an array.
var input= [4,3];

var answer = _.reduce(input, function(product,num) {return product *=num;}, 1);
console.log(answer);

//Use _.reduce to concatenate all strings in an array.
var answer = _.reduce(input, function(a,b) {return a.concat(b)});
console.log(answer);
//Write a function that takes an array of names and congratulates them. Make sure to use _.reduce as part of the function.
var input= ['Steve', 'Sally', 'George', 'Gina']

var myfunc = function(thisarr) {
  var newarr =  _.reduce(thisarr, function(a, b) {return a.concat(" " + b);});
  console.log(" Congrats " + " " + newarr);
};

console.log(myfunc(input));

//_.pluck takes an object and a property name and returns the property name's value. Write your own version called myPluck.

var myObject = {name: "Neil", age: 120, afunc: function() {console.log("howdy");}
};

var myPluck = function(obj, propName){
    console.log(obj[propName]);
};  

myPluck(myObject, 'afunc');

//