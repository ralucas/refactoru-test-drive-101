describe("splice", function() {

  it("should remove elements from an array", function() {
    expect(splice(['a','b','c','d','e'], 2, 2)).toEqual(['a','b','e']);
  });
  it("should leave array unchanged - pure function", function() {
        var a = ['a','b','c','d','e'];
        splice(a,2,2);
        expect(a).toEqual(['a','b','c','d','e']);
  });
  it("should remove elements and replace them", function() {
    expect(splice(['a','b','c','d','e'], 1, 2, 'z')).toEqual(['a','z','d','e']);
  });
  it("should add elements from an array without removing any", function() {
    expect(splice(['a','b','c','d','e'], 1, 0, 'z')).toEqual(['a','z','b','c','d','e']);
  });
  it("should add elements at end even with arbitrary high index", function() {
    expect(splice(['a','b','c'], 99, 0, 'z')).toEqual(['a','b','c','z']);
  });
  it("should add elements at end even with arbitrary high index", function() {
    expect(splice(['a','b','c'], 99, 1, 'z')).toEqual(['a','b','c','z']);
  });
  it("should add multiple elements, even with arbitrary high index", function() {
    expect(splice(['a','b','c'], 99, 1, 'x','y','z')).toEqual(['a','b','c','x','y','z']);
  });
});