
function alreadySold(array) {
    let soldTv = 0;
    for (let i = 0; i < array.length; i++) {
        soldTv = soldTv + array[i].sold;
    }

    return soldTv;
}

export default alreadySold;

