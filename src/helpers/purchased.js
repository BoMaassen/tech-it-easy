import {inventory} from "../constants/inventory.js";

function purchased(array){
    let purchasedTv = 0;
    for (let i = 0; i < array.length ; i ++){
        purchasedTv = purchasedTv + array[i].originalStock
    }
    return purchasedTv;
}

export default purchased;