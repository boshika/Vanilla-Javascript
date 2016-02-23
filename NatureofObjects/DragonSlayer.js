var slaying = true;
var youHit = Math.floor(Math.random()*2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;
while(slaying)
{
    if(youHit)
    {
        console.log("Congrats!!! You hit the Dragon!!!" + damageThisRound + "times");
        totalDamage += damageThisRound;
        if (totalDamage >= 4)
        {
            console.log("WOW! You slew the Dragon!!!");
            slaying = false;
        }
        if (totalDamage < 4)
        {
            youHit = Math.floor(Math.random()*2);
        }
    } 
    else 
    {
        console.log("Dragon defeated you!!!");
    }    
    slaying = false;
}

