function printSteps(steps){
    for(let i=0;i<steps;i++){
        let consoleStr="";
        for(let j=0;j<=i;j++){
            consoleStr=consoleStr.concat("#");

        }
        consoleStr=consoleStr.padEnd(steps," ");
        console.log(consoleStr);
    }
}