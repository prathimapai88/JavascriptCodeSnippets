function fizzBuzz(n) {
    for (let index = 1; index <= n; index++) {
      if (index % 3 === 0 && index % 5 === 0) {
        console.log("FIZZBUZZ");
      } else if (index % 3 === 0) {
        console.log("FIZZ");
      } else if (index % 5 === 0) {
        console.log("BUZZ");
      } else {
        console.log(index);
      }
    }
  }
