// DESCRIPTION
// Create a combat function that takes the player's current health
// and the amount of damage received, and returns the player's new health.
// Health can't be less than 0.

//TEST
//Test.assertEquals(combat(100, 5), 95);
//Test.assertEquals(combat(92, 8), 84);
//Test.assertEquals(combat(20, 30), 0, "Health cannot go below 0")

//SOLUTION
function combat(health, damage) {
    let result = health - damage
    if(result>=0){
        return result
    } else{
        return 0
        //console.log("Health cannot go below 0")
    }
}

console.log(combat(100,5))
console.log(combat(92,8))
console.log(combat(20,30))

