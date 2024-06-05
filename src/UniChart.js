function UniChartCount(str){
  let unique=new Set(str);
  console.log('******',unique.size);
  return unique.size;

}

UniChartCount("ABCCCC")

