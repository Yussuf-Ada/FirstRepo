class ShoppingList {
  constructor() {
    this.listOfItems = [];
  }
  add(item) {
    this.listOfItems.push(item);
  }
  getNumItems() {
    return this.listOfItems.length;
  }
  getListofItems() {
    return this.listOfItems;
  }
  removeItem(itemName) {
    for (let i = 0; i < this.listOfItems.length; i++) {
      if (itemName === this.listOfItems[i].itemName) {
        this.listOfItems.splice(i, 1);
      }
      return "item  deleted";
    }
    return "item not found";
  }
}

class ShoppingItem {
  _itemName;
  _itemQuanitity;

  constructor(itemName, itemQuanitity) {
    this._itemName = itemName;
    this._itemQuanitity = itemQuanitity;
  }

  get itemName() {
    return this._itemName;
  }
  get itemQuanitity() {
    return this._quanitity;
  }

  set itemQuanitity(quanitity) {
    return (this._quanitity = quanitity);
  }
}
const steveList = new ShoppingList();

const steveShoppingItem1 = new ShoppingItem("Macbook Pro", 1);
const steveShoppingItem2 = new ShoppingItem("USB-C Cable", 4);

steveList.add(steveShoppingItem1);
steveList.add(steveShoppingItem2);
steveList.removeItem("Macbook Pro");

console.log(steveList);
