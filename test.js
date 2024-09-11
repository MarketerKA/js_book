describe("pow", function () {
  before(() => alert("Тестирование началось – перед тестами"));
  it("2 in power of 3", function () {
    assert.equal(pow(2, 3), 8);
  });

  it("2 in power of 4", function () {
    assert.equal(pow(2, 4), 16);
  });
  describe("raises x to power n", function () {
    function makeTest(x, n) {
      let expected = x ** n;
      it(`${x} in power of ${n} is ${expected}`, function () {
        assert.equal(pow(x, n), expected);
      });
    }
    for (let i = 1; i <= 5; i++) {
      for (let j = 0; j <= 5; j++) {
        makeTest(i, j);
      }
    }
  });
});
