//create a new function that filters all the members
//of an array based on a function that will pass into this function as a parameter

function filter(aObject, callback) {
	var passed = [];
	for(var i=0; i<aObject.length; i++) {
			if(callback(aObject[i])) {
				passed.push(aObject[i])
			}

	}
  return passed;
}

console.log(filter([1,2,5,8,9,5], function(number) {
     if (number %2 == 0)
        {return number;}      

})); //Output [2, 8]

//function reduce

function reduce(aObj, callback) {
      var result = 0;
      for(var i=0; i<aObj.length; i++) {
             result = callback(result, aObj[i]);
        }
    return result;
}

var thisArray = [2,10];

console.log(reduce(thisArray, function(a, b){
         
         return a+b;
}));  //output 12

//each

function each(collection, callback){
    if(!Array.isArray(collection))
       {
          for(var key in collection)
          {
            callback(collection[key]);
            }
       }
       
       else if (Array.isArray(collection))
       {
          for(var i=0; i<collection.length; i++)
         {
      
           callback(collection[i]);
    
          }
   }
}

each( myArray, print );
// [1,2,3,4,5]
//1
//2
//3
//4
//5

//map

function map(inArray, callback) {
    outArray = [];
    for(var i=0; i<inArray.length; i++) {
        outArray.push(callback(inArray[i]))
      }
  return outArray;   
}

console.log(map([2,4,6,7], function(number) {
       return number;
})); //output [2,4,6,7]

//map function using  the each function I built above

function each(collection, callback){
    if(!Array.isArray(collection))
       {
          for(var key in collection)
          {
            callback(collection[key]);
            }
       }
       
       else if (Array.isArray(collection))
       {
          for(var i=0; i<collection.length; i++)
         {
      
           callback(collection[i]);
    
          }
   }
}

function map (isObj, callback) {
    var newArr = [];
    each(isObj, function(value) {newArr.push(callback(value))});
    return newArr;
   }

console.log(map({a:"Boshika", b:45}, function(number) {
return number}
))

//filter using the each function

function each(collection, callback){
    if(!Array.isArray(collection))
       {
          for(var key in collection)
          {
            callback(collection[key]);
            }
       }
       
       else if (Array.isArray(collection))
       {
          for(var i=0; i<collection.length; i++)
         {
      
           callback(collection[i]);
    
          }
   }
}

function filter(collection, callback) {
       var newArr = [];
       each(collection, function(value) {newArr.push(callback(value))})
       return newArr;
}

console.log(filter([2,3,4], function(value) {return value+2;}))



// //Using each function that I built above with a new filter function

 function each(collection, callback){
    if(!Array.isArray(collection))
       {
          for(var key in collection)
          {
            callback(collection[key]);
            }
       }
       
       else if (Array.isArray(collection))
       {
          for(var i=0; i<collection.length; i++)
         {
      
           callback(collection[i]);
    
          }
   }
}
function filter(collection, callback) {
     var newArr = [];
     each(collection, function(value) {
          if (callback(value)) {newArr.push(value)}
     })
return newArr
}

var isEven = function(value) {if(value % 2 == 0) {return value}}

console.log(filter([10,46,85,32,0,87,52], isEven))


//each with reduce

function each(collection, callback){
    if(!Array.isArray(collection))
       {
          for(var key in collection)
          {
            callback(collection[key]);
            }
       }
       
       else if (Array.isArray(collection))
       {
          for(var i=0; i<collection.length; i++)
         {
      
           callback(collection[i]);
    
          }
   }
}

function reduce(collection, callback) {
     var result =0;
     //for(var i=0; i<collection.length; i++)
      // {
         each(collection, function(value) {result = callback(value,result)})
          
      // }
  return result;
}

console.log(reduce([2,3,4,5], function(value, addTo){return value + addTo}));  //output 14



//4._.pluck takes an object and a property name and returns the //property name's value. Write your own version called myPluck.

function myPluck(obj, callback, keyThis) {
 var nameVal=[];
     for(var key in obj) {
         if(callback(obj[key], keyThis)) {nameVal.push(obj[key])}
   }
 return nameVal
}

console.log(myPluck({key1:"Boshika", key2:"San Francisco", key3:"Mission Street"}, function(value, keyThis) {if(value == keyThis) {return value;}}, "San Francisco"))

//concat a multi array using reduce

function reduce(collection, callback) {
   var result=[];
    for(var i=0; i<collection.length; i++) {
        for(var j=0; j<collection[i].length; j++)
      {
          result.push(callback(collection[i][j]))
      }
} return result }

  console.log(reduce([[2,4],[6,8],[0]], function(value) {
       return value;

})) //output [2, 4, 6, 8, 0]