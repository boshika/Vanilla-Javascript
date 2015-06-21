//add properties and assign values

var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;

// add properties and assign values
vehicle1["# of weapons"] = 1;
vehicle2["# of weapons"] = 4;
vehicle3["# of weapons"] = 8;

//Basic Object manuplation

var superBlinders = [
  ["Firelight", 4000],
  ["Solar Death Ray", 6000],
  ["Supernova", 12000]
];

var lighthouseRock = {
  gateClosed: true,
  bulbs: [200, 500, 750],
  capacity: 30,
  secretPassageTo: "Underwater Outpost"
};

// remove bulbs property from lighthouseRock
delete lighthouseRock.bulbs;

// add weaponBulbs property to lighthouseRock
lighthouseRock.weaponBulbs = superBlinders;

// log the correct weaponBulbs array value to the console
console.log(lighthouseRock.weaponBulbs[2][0]);

//Function manuplation of objects

var vehicle3 = {
  type: "Submarine", capacity: 8, storedAt: "Underwater Outpost",
  ranger1: {name: "Gregg Pollack", skillz: "Lasering", dayOff: "Friday"},
  ranger2: {name: "Bijan Boustani", skillz: "Working", dayOff: "Saturday"},
  ranger3: {name: "Ashley Smith", skillz: "Torpedoing", dayOff: "Friday"},
  ranger4: {name: "Mark Krupinski", skillz: "Sniping", dayOff: "Wednesday"},
  numRangers: 4
};
var relieveDuty = function(vehicle, day) {
  var offDuty = [];
  var onDuty = [];

  for (var i = 1; i <= vehicle.numRangers; i++) {
    if (vehicle["ranger"+i].dayOff == day) {
      offDuty.push(vehicle["ranger"+i]);
    } else {
      onDuty.push(vehicle["ranger"+i]);
    }
    delete vehicle["ranger"+i];
  }

  vehicle.numRangers -= offDuty.length;

  for (var j = 1; j <= vehicle.numRangers; j++) {
    vehicle["ranger"+j] = onDuty.shift();
  }

  return offDuty;
};

var offToday = relieveDuty(vehicle3, "Friday");

//Enumeration in objects

var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

// build listGuns
var listGuns = function(guns) {
  for (var speargun in guns) {
  		console.log("Behold! " + speargun + ", with " + guns[speargun]["heft"] + " heft!");
  }

};

// call listGuns and pass in rockSpearguns
listGuns(rockSpearguns);

//Above example changed to make the function property of the object

var rockSpearguns = {
  Sharpshooter: {barbs: 2, weight: 10, heft: "overhand"},
  Pokepistol: {barbs: 4, weight: 8, heft: "shoulder"},
  Javelinjet: {barbs: 4, weight: 12, heft: "waist"},
  Firefork: {barbs: 6, weight: 8, heft: "overhand"},
  "The Impaler": {barbs: 1, weight: 30, heft: "chest"}
};

// convert listGuns function
rockSpearguns["listGuns"] = function() {
  for (var property in this) {
     if (this[property]["heft"] != undefined) {
        console.log("Behold! " + property + ", with " + this[property]["heft"] + " heft!");
     }
  }
};

// call listGuns using bracket notation on rockSpearguns
rockSpearguns["listguns"]();


// ///////////////////////// PROTOTYPES //////////////////////////////////////////////////////////////
//creating a prototype for arrays

var canyonCows = [
  {name: "Bessie", type: "cow", hadCalf: "Burt"},
  {name: "Donald", type: "bull", hadCalf: null},
  {name: "Esther", type: "calf", hadCalf: null},
  {name: "Burt", type: "calf", hadCalf: null},
  {name: "Sarah", type: "cow", hadCalf: "Esther"},
  {name: "Samson", type: "bull", hadCalf: null},
  {name: "Delilah", type: "cow", hadCalf: null}
];

Array.prototype.countCattle = function(kind) {
			var numKind;
  		for(var i =0; i<this.length; i++) 
      {
      		if(this[i]["type"] == kind)
          {
             numKind++;
          
          }
      }

 return numKind;

};
canyonCows.countCattle("cow");

//Prototypin arrays and objects

var forestCows = [
  {name: "Legolas", type: "calf", hadCalf: null},
  {name: "Gimli", type: "bull", hadCalf: null},
  {name: "Arwen", type: "cow", hadCalf: null},
  {name: "Galadriel", type: "cow", hadCalf: null},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];

Object.prototype.noCalvesYet = function() {
			if(this["type"] == "cow" && this["hadCalf"] == null)
      {return true;} else {return false;}
};

Array.prototype.countForBreeding = function() {
		var numToBreed=0;
  	for(var i =0; i<this.length; i++)
    {
    		if(this[i].noCalvesYet() == true)
        {numToBreed++;}
    }
return numToBreed;

};

forestCows.countForBreeding();
