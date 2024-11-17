function sizes(array) {
    let availableSizes = ""
    for (let i = 0; i < array.length; i++) {
        availableSizes = availableSizes + `${array[i]} inch (${array[i] * 2.54} cm)`

        if (i < array.length -1){
            availableSizes = `${availableSizes} | `;
        }
    }

    return availableSizes
}

export default sizes;