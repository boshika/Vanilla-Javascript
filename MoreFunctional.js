/////////////////////////////////////////////////

/** Functions as Units of Behavior
Data hiding aka encapsulation, can be done by storing and passing discrete
units of behavior
Example of that is Array Indexing
**/
var indexArray = function(collection, index) {
  return collection[index];
};

//Example
indexArray([1,2,3,4], 2)
//will return 3
//////////////////////////////////////////////////

/** Comparator
Sort method w/o a function does a string comparison, to avoid this 
a comparator function needs to be passed into sort
**/

var comparator = function(x,y) {
  if(x < y) {
    return -1;
  } else if (x > y) {
    return 1;
  }
};

var myArray = [2,-1,3,5,2,-125];
myArray.sort(comparator);
//[-125, -1, 2, 2, 3, 5]

///////////////////////////////////////////////////////