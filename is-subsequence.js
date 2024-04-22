function isSubsequence(str1, str2) {
    let str1Index = 0;
    let str2Index = 0;
    const lenStr1 = str1.length;
    const lenStr2 = str2.length;

    // Loop through both strings using two pointers
    while (str1Index < lenStr1 && str2Index < lenStr2) {
        // If characters match, move the str1Index to check the next character
        if (str1[str1Index] === str2[str2Index]) {
            str1Index += 1;
        }
        // Always move the str2Index to continue checking against str1
        str2Index += 1;
    }

    // Check if all characters in str1 were found in str2 in the correct order
    return str1Index === lenStr1;
}

// Example test cases
console.log(isSubsequence('hello', 'hello world')); 
console.log(isSubsequence('sing', 'sting'));       
console.log(isSubsequence('abc', 'abracadabra'));  
console.log(isSubsequence('abc', 'acb'));           
