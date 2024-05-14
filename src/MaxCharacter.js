function MaxChar(inputStr){
    let charObj={};
    let maxChar="";
    let maxCharCount=1;
    for(let i of inputStr){
        if(!charObj[i]){
            charObj[i]=1;
        }
        else{
            charObj[i]=charObj[i]+1;
        }
    }
    for(let countItem in charObj){
        if(charObj[countItem]>maxCharCount){
            maxCharCount=charObj[countItem];
            maxChar=countItem;
        }
    }

    return maxChar?maxChar:"No Max Char found";
}