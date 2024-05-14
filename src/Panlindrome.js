function isPalindrom(inputStr){
    return inputStr.toLowerCase()===inputStr.toLowerCase().split('').reverse().join('');
}