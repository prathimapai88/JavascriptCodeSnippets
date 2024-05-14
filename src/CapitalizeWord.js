function captilizeWord(sentence){

    let wordsArr=sentence.split(" ");
    let editedArr=wordsArr.map((item)=>{
        return `${item.charAt(0).toUpperCase()}${item.slice(1,item.length)}`;
    });
    return editedArr.join(' ');

}