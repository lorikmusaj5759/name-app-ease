/* 
   Filename: ComplexCode.js
   Content: A complex code showcasing a virtual restaurant ordering system with various functionalities.
*/

// Restaurant Class
class Restaurant {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
  }

  welcomeMessage() {
    console.log(`Welcome to ${this.name}! What would you like to order today?`);
  }

  displayMenu() {
    console.log("Menu:");
    for (const [item, price] of Object.entries(this.menu)) {
      console.log(`${item}: $${price}`);
    }
  }
}

// Menu Class
class Menu {
  constructor() {
    this.items = {};
  }

  addItem(item, price) {
    this.items[item] = price;
  }

  removeItem(item) {
    delete this.items[item];
  }

  updatePrice(item, newPrice) {
    this.items[item] = newPrice;
  }
}

// Order Class
class Order {
  constructor() {
    this.items = {};
  }

  addItem(item, quantity) {
    if (this.items[item]) {
      this.items[item] += quantity;
    } else {
      this.items[item] = quantity;
    }
  }

  removeItem(item, quantity) {
    if (this.items[item]) {
      if (this.items[item] <= quantity) {
        delete this.items[item];
      } else {
        this.items[item] -= quantity;
      }
    }
  }

  printOrder() {
    let total = 0;
    console.log("Order:");
    for (const [item, quantity] of Object.entries(this.items)) {
      const price = restaurant.menu.items[item];
      const subtotal = price * quantity;
      console.log(`${item} x ${quantity}: $${subtotal}`);
      total += subtotal;
    }
    console.log(`Total: $${total}`);
  }
}

// Create a new restaurant
const menu = new Menu();
menu.addItem("Burger", 10.99);
menu.addItem("Pizza", 12.99);
menu.addItem("Salad", 8.99);
menu.addItem("Drink", 2.99);

const restaurant = new Restaurant("Virtual Restaurant", menu);

// Simulate ordering process
restaurant.welcomeMessage();
restaurant.displayMenu();

const order = new Order();
order.addItem("Burger", 2);
order.addItem("Pizza", 1);
order.addItem("Drink", 3);

order.printOrder();