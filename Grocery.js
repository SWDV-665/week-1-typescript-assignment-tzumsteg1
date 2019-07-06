//the following creates a class called Grocery
var Grocery = /** @class */ (function () {
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
var groceries = [new Grocery("Milk", 1, 2.99), new Grocery("Bread", 2, 2.49), new Grocery("Eggs", 12, 2.96)];
function showItem(groceries) {
    var text = "";
    groceries.forEach(function (item) {
        text += "<b>Item:</b> " + item.name + "  <br><b>Quantity:</b> " + item.quantity + " <br><b>Price:</b> " + item.price + " <br><br>";
    });
    return "<h1>Grocery List: </h1> <hr><br>" + text;
}
document.body.innerHTML = showItem(groceries);
