
describe("listNumbers", function(){

  it("takes an input and returns a range of numbers from 1 to the users input and place into array", function(){
    expect(listNumbers(5)).to.equal[1,2,3,4,5];
  });
});


describe("replaceNumbers", function(){

  it("looks through array and replaces all values divisible by 3,5,15 with their corrosponding string and puts them into a list", function(){
    expect(replaceNumbers(5)).to.equal("<li>1</li><li>2</li><li>Ping</li><li>4</li><li>Pong</li>")
  });
});
