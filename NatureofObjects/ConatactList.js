ar friends ={
    bill:{
       firstName: "Bill",
       lastName: "McGee",
       number:45678905,
       address: ['One Microsoft Way','Redmond','WA','98052']
        },
   steve:{
       firstName: "Steve",
       lastName: "McGee",
       number:45678905,
       address: ['Two Microsoft Way','Redmond','WA','98052']
       
       }    
    };
    
    var list = function(obj) {
        for(var key in obj) 
        {
            console.log(key);
        }
    };
    var search = function(name) {
        for(var key in friends) 
        {
            if(friends[key].firstName === name)
            {
            console.log(friends[key].address);
            //return friends[key].address;
            }
        }
    };
    
    
    list(friends);
    search("Steve");
    