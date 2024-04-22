// add whatever parameters you deem necessary
function constructNote(message, letters) {
    let messageCount = {}, letterCount = {};
    

    // Populate the messageCount dictionary
    for (let char of message) {
        messageCount[char] = 1 + (messageCount[char] || 0);
    }

    // Populate the letterCount dictionary
    for (let char of letters) {
        letterCount[char] = 1 + (letterCount[char] || 0);
    }

    // Check if message can be built from letters
    for (let char in messageCount) {
        if (messageCount[char] > (letterCount[char] || 0)) {
            return false;
        }
    }

    return true;
}

console.log(constructNote('aa', 'abc')); 
console.log(constructNote('abc', 'dcba')); 
console.log(constructNote('aabbcc', 'bcabcaddff'));
