function twoArrayObject(keys, values) {
    let builtObject = {};
    
    // Iterate over the keys array using a loop
    for (let i = 0; i < keys.length; i++) {
        // Use the index to check against the values array length
        if (i < values.length) {
            builtObject[keys[i]] = values[i];
        } else {
            builtObject[keys[i]] = null;  // Assign null if there are no corresponding values
        }
    }

    return builtObject;
}

console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])); 
console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]));  
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2]));         
