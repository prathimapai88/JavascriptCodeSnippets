function removeDup(inputArr){
    let dupsremoved=inputArr.filter((item,index,arr)=>{
    return arr.indexOf(item)===index;
    });
    console.log('dupsremoved',dupsremoved);
}