export class Shop {
  constructor() {
    this.products = {};
    this.currentId = 0;
  }

  assignId() {
    this.currentId += 1;
    return this.currentId;
  }

  addProduct(product) {
    product.id = this.assignId();
    this.products[product.productName] = product;
  }

  findProduct(productName) {
    if (this.products[productName] != undefined) {
      return this.products[productName];
    }
    return false;
  }

  sellItem(productName, quantity) {
    let productName1 = this.findProduct(productName).productName;
    let quantity1 = this.findProduct(productName).quantity;
    if (productName === productName1 && quantity < quantity1) {
      return quantity1 - quantity;
    } else if (productName !== productName1) {
      return 'Please check the name of the product!';
    } else if (quantity > quantity1) {
      return 'Sorry we do not have the amount of quantity you we demanded fot in stock';
    }
  }
}

export class Item {
  constructor(productName, quantity) {
    this.productName = productName;
    this.quantity = quantity;
  }
}

let shopItem = new Shop();
let item1 = new Item('Laptop', 7);
let item2 = new Item('Mouse', 50);

shopItem.addProduct(item1);
shopItem.addProduct(item2);
