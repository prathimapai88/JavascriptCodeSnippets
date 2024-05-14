function isAnangram(str1,str2){
    let str1Transform=str1.split("").sort().join("");
    let str2Transform=str2.split("").sort().join("");
    return str1Transform===str2Transform;
}