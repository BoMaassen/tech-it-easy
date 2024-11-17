import purchased from "./purchased.js";
import alreadySold from "./alreadySold.js";

function forSale(array){
    return purchased(array) - alreadySold(array)
}

export default forSale;