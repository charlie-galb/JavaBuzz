class Javabuzz {
  play(number) { 
    if (this._isDivisibleByFiveAndThree(number)) {
      return 'FizzBuzz';
    } else if (this._isDivisibleByThree(number)) {
      return'Fizz';
    } else if (this._isDivisibleByFive(number)) {
      return 'Buzz';
    } else {
      return number
    }
  }

  _isDivisibleByThree(number) {
    return (number % 3 == 0);
  };
  _isDivisibleByFive(number) {
    return (number % 5 == 0);
  };
  _isDivisibleByFiveAndThree(number) {
    return (number % 5 == 0 && number % 3 ==0);
  };
}
