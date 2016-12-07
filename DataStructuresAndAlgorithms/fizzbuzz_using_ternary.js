function fizzbuzz() {
  var result = [];
  for (var i = 1; i <= 50; i++) {
        i % 3 === 0 && i % 5 === 0 ? result.push("FizzBuzz") : i % 3 === 0 ? result.push("Fizz") : i % 5 === 0 ? result.push("Buzz") : result.push(i);

}
  console.log(result);  //return result;
}

fizzbuzz()
