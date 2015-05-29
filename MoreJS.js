//More Javascript solutios

//is a number prime function

function prime(n) {
     var isPrime = true;
    
            
       if(n != Math.round(n)) {return false;}
       if(n<2) {return false;}
       
        for(var i=2; i<=Math.sqrt(n); i++)
   {
            if( n % i == 0) 
               {return console.log("not prime");} 
           
   }
   return console.log("Prime");
}
prime(7);

/*Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if 
there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, 
no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. */

function ExOh(str) { 
 var newarr =[];
  var forx=0;
  var foro=0;
  
  newarr = str.split("");
  for(var i=0; i<newarr.length; i++)
  {
     if(newarr[i]=='x')
             {
               forx++;
             }
     else if (newarr[i]=='o') 
             {
               foro++;
             }
     
  }
   if (forx == foro)
   {return true;}
  else 
   {return false;}
         
}

//count the number of vowels in a string

function VowelCount(str) { 
var vowels = ["a","e","i","o","u"];
var newarr =[];  
 var count =0;
  newarr = str.split("");
  for(var i=0; i<newarr.length; i++)
  {
     for(var j=0; j<vowels.length;j++)
     {
       if(newarr[i] == vowels[j])
       {count++;}
     }
  }
  return count; 
         
}
  
  //Word count

  function WordCount(str) { 

  //push the words in an array
  var myArray = str.split(" ");
  //count the indexes+4
  var count =0;
  for(var i= 0; i< myArray.length; i++)
  {
  	count+=1;
  }
  
  return count; 
         
}
   
  //iterate through an object or an array

  var arrthis = [2,5,7,9];
var objthis = {name: "Boshika", city: "San Francisco", state:"California" };

function Iteration(myObject)
  {
    for(var i in myObject)
      {console.log(myObject[i]);}

 }

   Iteration(arrthis);
   Iteration(objthis);

   //iterate through an array or Object and apply a function to them

var arrthis = [2,5,7,9];
var objthis = {name: "Boshika", city: "San Francisco", state:"California" };

function Iteration(myObject, thisfunc)
  {
    for(var i in myObject)
      {thisfunc(myObject[i]);}

 }

var sayHello = function(n) {
        
         console.log("Hello" + " " + n);

};

   Iteration(arrthis, sayHello);
   Iteration(objthis, sayHello);


//Closure example
   var add = function(thisarray){
  var anotherarr = [];
  var sum=0
  anotherarr = thisarray;

  var reduce = function(){
   var sum=0
    for(var i=0; i<anotherarr.length; i++)
       {sum+=anotherarr[i];}
    return sum
  };

  return reduce;
};
var addEleven = add([1,2,3]);
var result = addEleven();
console.log(result);

var now = add([1,2]);
var thisarr = now();
console.log(thisarr)

//Processes depending on whether the object is an objct or an array

function thisArray(Arr) {
   if (Array.isArray(Arr)) {return isEven(Arr);}
   else if(!Array.isArray(Arr)) {return isObj(Arr);}
}

function isEven(Arr) {
var newarr = [];
    for(var i=0; i<=Arr.length; i++)
       {
            if(Arr[i] % 2 == 0)
               {newarr.push(Arr[i]);}
       }
  console.log(newarr);
}

function isObj(Arr) {
var newarr=[];
  for(key in Arr)
{
   if(Arr[key] % 2 == 0)
       {newarr.push(Arr[key]);}
} 

console.log(newarr);

}
var myArr =[3,6,8,0];
var myObject = {value1: 1, value2: 2, name:"Boshika Tara"};
//console.log(myObject["value1"])
thisArray(myArr);
thisArray(myObject);

////////////IMPORTANT ///////////

var myArray=[1,2,3,4,5];

var myObject={value1:"Boshika", value2:4, value3:"San Francsico"};

function print(value){
    console.log(value);
}

var temp = 'value2'
print(myObject[temp])
print(myObject.temp)



print(myArray[1]);
print(myObject[value2])
print([1,2,3]);
// [1,2,3]

print(2);


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

each( myObject, print );
//Boshika
//4
//San Francisco


function map(collection, callback){
    //write map function body
    var newarr =[];
    //for(var i=0; i<collection.length; i++)
    //{
    //   
    //  //callback(collection[i]);
    //   newarr.push(callback[i]);
    //}
    
    each(collection, function(value) {newarr.push(callback(value)); );
    
    return callback;
}


var func1 = function( val ) { 
    return val * 2 
};

var func2 = function( val ) { 
    return val + 2 
};

map( myArray, func1);
// [2,4,6,8,10]

map( myArray, func2);
// [3,4,5,6,7]


 