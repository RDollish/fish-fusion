const { boatInventory } = require("./fishingBoat.js")

//buys 10 of each fish below $7.50. Must have at least 10.
//chef can specify price limit of fish to buy
// each fish object now returns 10

let fishInventory = boatInventory()
// mongerInventory = (array, amount, price) => {
//     [

//     ]
//   };
//   let mInv = mongerInventory()
const mongerInventory = () => {

let filteredFish = fishInventory.filter(function (x) {
    return x.price <= 7.50 && x.amount >= 10})

let updatedfilteredFish = filteredFish.map(fish => {
fish.amount = 10
return fish
})
return updatedfilteredFish
}


// console.log(mongerInventory())

 
module.exports = {mongerInventory}