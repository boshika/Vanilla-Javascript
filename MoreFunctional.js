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

