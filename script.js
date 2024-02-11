document.addEventListener("DOMContentLoaded", function() {
    var item1Elements = document.querySelectorAll(".item1");
    var item2Elements = document.querySelectorAll(".item2");
    var outputDivs = document.querySelectorAll(".output");
    var totalPrice = 0; // Global variable to store the total price
    var selectedItems = []; // Array to store selected item names

    // Function to replace content of first and second <p> in output div
    function replaceOutputContent(event) {
        var clickedItem = event.currentTarget;
        var colElement = clickedItem.querySelector(".col");
        var itemName = colElement.querySelector("p").textContent;
        var itemPrice = parseFloat(clickedItem.querySelector(".price").textContent.replace("$", "")); // Get the item price as a number

        // Add the name of the selected item to the array
        selectedItems.push(itemName);

        // Update content of first output div with selected item names joined by "+"
        outputDivs[0].querySelector("p").textContent = selectedItems.join(" + ");

        // Add the price of the selected item to the total price
        totalPrice += itemPrice;

        // Update content of second output div with the updated total price
        outputDivs[1].querySelector("p").textContent = "Total Price: $" + totalPrice.toFixed(2);
    }

    // Attach click event listener to each .item1 element
    item1Elements.forEach(function(itemElement) {
        itemElement.addEventListener("click", replaceOutputContent);
    });
    item2Elements.forEach(function(itemElement) {
        itemElement.addEventListener("click", replaceOutputContent);
    });
});
