import {Shop, Item} from './../src/js/scripts.js';
describe('Shop', () => {
  test('Successfully add Item to Stock', () => {
    let shopItem = new Shop();
    let item1 = new Item('Laptop', 45);
    shopItem.addProduct(item1);
  });
});
