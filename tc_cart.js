"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Connor J Webdale 
   Date: 2.27.19 
   
   Filename: tc_cart.js
	
*/

// Declares a variable named orderTotal and sets its initial value to 0. 
var orderTotal = 0;

// Created a variable named cartHTML that contains HTML code for the contents of the shopping cart, displayed as a table. 
var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

// Creates a for loop that loops through the entris in the item array. 
for (let i = 0; i < item.length; i++) {
    // Added HTML code to the value of the cartHTML variable. 
    cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";

    // Adds the following HTML code to the cartHTML variable to display, price, and quantity. 
    cartHTML += "<td>" + itemDescription[i] + "</td><td>$" + itemPrice[i] + "</td><td>" + itemQty[i] + "</td>";

    // Declares a variable named itemCost equal to the price value multiplied by the quantity value for the current item. 
    var itemCost = itemPrice[i] * itemQty[i];

    // Adds HTML code to the cartHTML variable to display the cost for the item(s) ordered, and completing the table row. 
    cartHTML += "<td>$" + itemCost + "</td></tr>";

    // Adds the value of the itemCost variable to the orderTotal variable to keep a running total of the total cost of the customer order. 
    orderTotal = orderTotal + itemCost;
}

// Adds the following HTML code to the value of the cartHTML variable completing the shopping cart table. 
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";

// Applies the cartHTML value to the inner HTML of the div element with the ID cart. 
document.getElementById("cart").innerHTML = cartHTML;