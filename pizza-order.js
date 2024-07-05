const EventEmitter = require("node:events");
class PizzaOrder extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }
  order(size, topping) {
    this.orderNumber++;
    this.emit("order-pizza", size, topping);
  }
  displayOrderNumber() {
      console.log(`order number is
     ${this.orderNumber}`);
  }
}
module.exports = PizzaOrder;
