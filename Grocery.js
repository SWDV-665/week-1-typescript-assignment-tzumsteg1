//the following creates a class called Grocery
var Grocery = /** @class */ (function () {
    //constructor will create the different parts of the grocery list
    function Grocery(inputName, inputQuantity, inputPrice) {
        this.inputName = inputName;
        this.inputQuantity = inputQuantity;
        this.inputPrice = inputPrice;
        this.name = inputName;
        this.quantity = inputQuantity;
        this.price = inputPrice;
    }
    return Grocery;
}());
//set the grocery items
//I used the examples from the assignment (milk, bread, and eggs)
var groceryList = [new Grocery("Milk", 1, 2.99), new Grocery("Bread", 2, 2.49), new Grocery("Eggs", 12, 2.96)];
//the following function will list out each item with the name of the item, the quantity, and the price
function showItem(groceryList) {
    var text = "";
    groceryList.forEach(function (item) {
        text += "<b>Item:</b> " + item.name + "  <br><b>Quantity:</b> " + item.quantity + " <br><b>Price:</b> " + item.price + " <br><br>";
    });
    return "<h1>Grocery List: </h1> <hr><br>" + text;
}
document.body.innerHTML = showItem(groceryList);
