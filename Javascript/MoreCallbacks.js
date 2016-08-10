//ForEach Example
function() {
	var newReleases = [
			{
				"id": 70111470,
				"title": "Die Hard",
				"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 654356453,
				"title": "Bad Boys",
				"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			},
			{
				"id": 65432445,
				"title": "The Chamber",
				"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [4.0],
				"bookmark": []
			},
			{
				"id": 675465,
				"title": "Fracture",
				"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
				"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
				"rating": [5.0],
				"bookmark": [{ id: 432534, time: 65876586 }]
			}
		],
		videoAndTitlePairs = [];

	newReleases.forEach(function(video) {
		videoAndTitlePairs.push({ id: video.id, title: video.title });
	});

	return videoAndTitlePairs;
}
		


//maps alias collect

var data = {
    people: [
        {name: "Boshika", state: "CA", price:100},
        {name: "Sunil", state: "CA", price:200},
        {name: "Jai", state: "FL", price:1},
        {name: "Siya", state: "CA", price:100},
    ]
  },
    
    OrderItem = function(person) {
        getSummary = function() {
            return person.name + "spent" + person.price + "in" + person.state;
        }
        
        return {
            getSummary: getSummary
        }
    },
    
    m = _.collect(data.people,
                 function(value, key, list) {
//         console.log(value);
        return OrderItem(value);
    });

//console.log(m);
_.each(m, function(value){
    console.log(value.getSummary());
})

//Demonstrates the concept of memoization/caching using reduce
var data = {
    people: [
        {name: "Boshika", state: "CA", price:100},
        {name: "Sunil", state: "CA", price:200},
        {name: "Jai", state: "FL", price:1},
        {name: "Siya", state: "CA", price:100},
    ]
  }

var total = _.reduce(data.people, function(memo, value) {
   return memo + value.price;
}, 0);

console.log(total);
    

//Reduce Right

var products = [
    {id: 1001},
    {id: 1002},
    {id: 1003},
    {id: 2000},
    {id: 2001},
    {id: 3001},
    {id: 3002}
];

var ProductIDList = _.reduceRight(products, 
    function(memo, val) {
        
    if(memo !== "") {
        memo += ','
    }
    
    return memo + val.id
}, '');

console.log(ProductIDList);

//reversing a string using reduceRight
var reverse = function(stringIs) {
	return _.reduceRight(stringis, function(memo, value) {
		if(memo !== "") {
        memo += '';
    }
    
    return memo + value;
	}, '');
};

console.log(reverse("abc"));

//_.find finds the first value that matches the truth test, different then filter 

var someNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var findEven = function(value) {
    return value % 2 === 0;
}

var findOdd = function(value) {
    return value % 2 !== 0
}

var findGreaterThanEight = function(value) {
    return value > 8
}

console.log(_.find(someNumArray, findEven));
console.log(_.find(someNumArray, findOdd));
console.log(_.find(someNumArray, findGreaterThanEight));