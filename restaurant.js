// specifies price per fish, buys half of inventory at or below specified price
//creates three meals based on fish type: soup, sandwich, grilled
const { mongerInventory } = require("./fishMonger.js")
let fishInventory = mongerInventory()
const fishMenu = (mongerInventory) => {

    let filteredFish = fishInventory.filter(function (x) {
        return x.price <= 5.00 && x.amount >= 10})
    
    let updatedmenuFish = filteredFish.map(fish => {
    fish.amount = 5
    return fish
    })
    let HTMLString = ""
    Object.keys(updatedmenuFish).forEach(species =>
    HTMLString += `<h1>Menu</h1>
    <article class="menu">
        <h2>${updatedmenuFish[species].species}</h2>
        <section class="menu__item">${updatedmenuFish[species].species} Soup</section>
        <section class="menu__item">${updatedmenuFish[species].species} Sandwich</section>
        <section class="menu__item">Grilled ${updatedmenuFish[species].species}</section>
    </article>`)
    return HTMLString
    }
    console.log(fishMenu())

    module.exports = {fishMenu}