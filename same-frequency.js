function sameFrequency(num1, num2) {
    let str1 = String(num1);
    let str2 = String(num2);

    let freq1 = {}, freq2 = {};
    
    if (str1.length !== str2.length) {
        return false;
    }

    // Populate frequency dictionary for first number
    for (let digit of str1) {
        freq1[digit] = 1 + (freq1[digit] || 0);
    }

    // Populate frequency dictionary for second number
    for (let digit of str2) {
        freq2[digit] = 1 + (freq2[digit] || 0);
    }

    // Compare frequency dictionaries
    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }

    return true;
}

console.log(sameFrequency(182, 281)); 
console.log(sameFrequency(34, 14)); 
console.log(sameFrequency(3589578, 5879385)); 
console.log(sameFrequency(22, 222)); 

