function arrayChunk(arr, size) {
  let chunkedArr = [];
  while (arr.length > 0) {
    chunkedArr.push(arr.splice(0, size));
  }
  console.log('chunkedArr',chunkedArr);
}

arrayChunk([1, 2, 3, 4,7], 2);
