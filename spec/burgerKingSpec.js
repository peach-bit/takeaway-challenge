describe('Burgerking', function(){
  var burgerKing;
  beforeEach(function(){
    burgerKing = new Burgerking();
  });
  it('can make an instance of Burgerking',function(){
  expect(burgerKing = new Burgerking).toBeInstanceOf(Burgerking)
  });
//Testing user story 1: Can see the menu of dishes and prices
  it('can see list of dishes with prices',function(){
    expect(burgerKing.getMenu()).toEqual({ Whopper: 4.49, ChickenRoyale: 4.49, PrawnBurger: 3.79 })
  });
  it('can order a dish on the menu',function(){
    expect(burgerKing.orderDish("Lemonade")).toEqual("Lemonade is not on the menu.")
  });
  });
