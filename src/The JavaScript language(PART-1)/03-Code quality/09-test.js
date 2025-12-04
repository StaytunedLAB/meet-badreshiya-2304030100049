const expect = chai.expect;

function add(a, b) {
  return a + b;
}

describe("Addition test", function () {
  it("should return correct sum", function () {
    expect(add(3, 4)).to.equal(7);
  });
});
