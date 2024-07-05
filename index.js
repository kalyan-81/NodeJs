const PizzaShop = require("./pizza-order");
const DrinkMachine = require("./drink-machine");
const drinkMachine = new DrinkMachine();

const pizzaShop = new PizzaShop();

pizzaShop.on("order-pizza", (size, topping) => {
    console.log(`order recieved baking! 
  ${size} pizza with ${topping}`);
  drinkMachine.serveDrink(size);
});
pizzaShop.order("large", "mushroom");
console.log(pizzaShop.displayOrderNumber());
