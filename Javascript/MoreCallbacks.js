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