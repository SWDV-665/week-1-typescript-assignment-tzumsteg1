//the following creates a class called Grocery
class Grocery {
  //The name of each item should be entered as a string and the quantity should be a whole number, price can be whole number or float
  name: string;
  quantity: number;
  price: number;

  //constructor will create the different parts of the grocery list
  constructor (public inputName: string, public inputQuantity: number, public inputPrice: number) {
    this.name = inputName;
    this.quantity = inputQuantity;
    this.price = inputPrice
  }
}

//set the grocery items
//I used the examples from the assignment (milk, bread, and eggs)
let groceries = [new Grocery("Milk", 1, 2.99), new Grocery("Bread", 2, 2.49), new Grocery("Eggs", 12, 2.96)];

//the following function will list out each item with the name of the item, the quantity, and the price
function showItem(groceries) {
  var text = "";

  groceries.forEach((item) => {
    text += `<b>Item:</b> ${item.name}  <br><b>Quantity:</b> ${item.quantity} <br><b>Price:</b> ${item.price} <br><br>`;
  })

  return "<h1>Grocery List: </h1> <hr><br>" + text;
}


document.body.innerHTML = showItem(groceries);