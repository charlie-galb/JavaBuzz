describe('JavaBuzz', function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  })

  describe('knows when a number is NOT', function() {

  it('divisible by 3', function() {
    expect(javabuzz.isDivisibleByThree(1)).toBe(false);
  });

  it('divisible by 5', function() {
    expect(javabuzz.isDivisibleByFive(4)).toBe(false);
  });

});

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by 5 and 3', function() {
      expect(javabuzz.isDivisibleByFiveAndThree(15)).toBe(true);
    });

  });

  describe('play', function() {

    it('prints numbers 1 to 10', function() {
      expect(javabuzz.print(10)).toEqual('1, 2, 3, 4, 5, 6, 7, 8, 9, 10')
    })
  })

});
