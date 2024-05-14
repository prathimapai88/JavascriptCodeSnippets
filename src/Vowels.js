function vowels(str){
    let count=0;
    const vowelsArr=['a','e','i','o','u'];
    for(let i of str){
        if(vowelsArr.includes(i)){
             count=++count;
        }
    }
    return count;
}

