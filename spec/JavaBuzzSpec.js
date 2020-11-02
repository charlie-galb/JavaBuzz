describe('JavaBuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  })

  describe('play', function() {

    it('returns Fizz if divisible by three', function() {
      expect(javabuzz.play(6)).toEqual('Fizz');
    });

    it('returns Fizz if divisible by five', function() {
      expect(javabuzz.play(10)).toEqual('Buzz');
    });

    it('returns Fizz if divisible by three and five', function() {
      expect(javabuzz.play(15)).toEqual('FizzBuzz');
    });

  })

});
