// Initializing the required data
"use strict"
const prompt = require("prompt-sync")()
const categories = ["clothing", "electronics", "Accessories", "Travel"]
const numbering = ["A", "B", "C", "D", "E", "F", "G"]

let itemsAdded = []
let itemsPrice = []

let name = prompt("Hello, what is your name? ")
name = name.slice(0, 1).toUpperCase() + name.slice(1, name.length)
console.log(`Hello ${name}, welcome to Mereson Online Store`)

// This function displays the category menu
function callCategory() {
  for (let i = 0; i < categories.length; i++) {
    console.log(numbering[i] + ") " + categories[i])
  }
  console.log("Select the category you want e.g: A for Clothing")
  let selectedCategory = prompt("Choose categories A - D or type Z to exit: ")
  selectedCategory = selectedCategory.toUpperCase()
  return selectedCategory
}

// This function selects a chosen category
function selectCategory(selectedCategory) {
  let access = false
  if (selectedCategory == "A") {
    console.log(`\nChoose the ${categories[0].toUpperCase()} you want`)
    access = true
    clothingCategory()
  } else if (selectedCategory == "B") {
    console.log(`\nChoose the ${categories[1].toUpperCase()} you want`)
    access = true
    electronicsCategory()
  } else if (selectedCategory == "C") {
    console.log(`\nChoose the ${categories[2].toUpperCase()} you want`)
    access = true
    accessoriesCategory()
  } else if (selectedCategory == "D") {
    console.log(`\nChoose the ${categories[3].toUpperCase()} you want`)
    access = true
    travelCategory()
  } else if (selectedCategory == "Z") {
    exitStore()
    access = true
  } else {
    console.log("\nYou did not select the proper category!")
    access = true
    storeFunction()
  }
  return access
}

// This function controls the selecting of items
function addFunction(added, item, callBack) {
  let itemList
  let priceList
  if (added == "A") {
    console.log(`\nYou added ${item.name[0]}\n`)
    itemList = item.name[0]
    priceList = item.price[0]
    pushItemArray(itemList)
    pushPriceArray(priceList)
    callBack()
  } else if (added == "B") {
    console.log(`\nYou added ${item.name[1]}\n`)
    itemList = item.name[1]
    priceList = item.price[1]
    pushItemArray(itemList)
    pushPriceArray(priceList)
    callBack()
  } else if (added == "C") {
    console.log(`\nYou added ${item.name[2]}\n`)
    itemList = item.name[2]
    priceList = item.price[2]
    pushItemArray(itemList)
    pushPriceArray(priceList)
    callBack()
  } else if (added == "D") {
    console.log(`\nYou added ${item.name[3]}\n`)
    itemList = item.name[3]
    priceList = item.price[3]
    pushItemArray(itemList)
    pushPriceArray(priceList)
    callBack()
  } else if (added == "E") {
    console.log(`\nYou added ${item.name[4]}\n`)
    itemList = item.name[4]
    priceList = item.price[4]
    pushItemArray(itemList)
    pushPriceArray(priceList)
    callBack()
  } else if (added == "X") {
    storeFunction()
  } else if (added == "Y") {
    console.log("\nProceed to Checkout")
    checkout()
  } else if (added == "Z") {
    exitStore()
  } else {
    console.log("\nYou didn't choose a proper item...")
    callBack()
  }
}

// This function stores the selected items in an array
function pushItemArray(itemList) {
  if (itemList !== undefined) {
    itemsAdded.push(itemList)
  }
  return itemsAdded
}

// This function stores the prices of selected items in an array
function pushPriceArray(priceList) {
  if (priceList !== undefined) {
    itemsPrice.push(priceList)
  }
  return itemsPrice
}

// This is for the clothing category
function clothingCategory() {
  const clothes = {
    name: ["T-Shirt", "Polo", "Hoodie", "Baggy Jeans", "Combat Shorts"],
    price: [7000, 5000, 15000, 9000, 7500],
  }
  console.log("Choose from A - E")
  for (let i = 0; i < clothes.name.length; i++) {
    console.log(
      numbering[i] + ") " + clothes.name[i] + "  N" + clothes.price[i]
    )
  }
  let added = selectMenu()
  let callBack = clothingCategory
  added = added.toUpperCase()
  addFunction(added, clothes, callBack)
}

// This is for the electronics category
function electronicsCategory() {
  const electronics = {
    name: [
      "JBL Speakers",
      "MTN 5G Router",
      "Iphone 14 Pro Max",
      "Xbox Series X",
      "Light Saber",
    ],
    price: [155000, 50000, 1500000, 750000, 475000],
  }
  console.log("Choose from A - E")
  for (let i = 0; i < electronics.name.length; i++) {
    console.log(
      numbering[i] + ") " + electronics.name[i] + "  N" + electronics.price[i]
    )
  }
  let added = selectMenu()
  let callBack = electronicsCategory
  added = added.toUpperCase()
  addFunction(added, electronics, callBack)
}

// This is for the accessories category
function accessoriesCategory() {
  const accessories = {
    name: [
      "Oraimo FreePods 4",
      "Anti Blue Light Glasses",
      "Adjustable Laptop Stand",
      "Sony DualShock 3",
      "20000 MAh Power Bank",
    ],
    price: [29585, 8600, 40800, 9500, 15000],
  }
  console.log("Choose from A - E")
  for (let i = 0; i < accessories.name.length; i++) {
    console.log(
      numbering[i] + ") " + accessories.name[i] + "  N" + accessories.price[i]
    )
  }
  let added = selectMenu()
  let callBack = accessoriesCategory
  added = added.toUpperCase()
  addFunction(added, accessories, callBack)
}

// This is for the travel category
function travelCategory() {
  const travel = {
    name: [
      "Travel Luggage Box",
      "Camping Tent",
      "Hiking Gear",
      "Travel Pillow",
      "Tote bag",
    ],
    price: [70000, 15000, 25000, 10000, 4500],
  }
  console.log("Choose from A - E")
  for (let i = 0; i < travel.name.length; i++) {
    console.log(numbering[i] + ") " + travel.name[i] + "  N" + travel.price[i])
  }
  let added = selectMenu()
  let callBack = travelCategory
  added = added.toUpperCase()
  addFunction(added, travel, callBack)
}

// This function displays the select commands
function selectMenu() {
  console.log(
    "Type X to go back to Category menu, Type Y to proceed to checkout"
  )
  console.log("Type Z to exit store.")
  let selectedItem = prompt("Selected Item: ")
  return selectedItem
}

// This is the main store function
function storeFunction() {
  console.log("\nWhat would you like to order")
  let hasAccess = false
  let selectedCategory = callCategory()
  while (hasAccess == false) {
    let access = selectCategory(selectedCategory)
    hasAccess = access
  }
}

// This function is for checking out of the store
function checkout() {
  let cart = pushItemArray()
  let totalPrice = pushPriceArray()
  let sum = 0
  let items = ""
  let numCount = 0

  for (let i = 0; i < cart.length; i++) {
    numCount++
    items =
      items + "\n" + String(`${numCount}) ${cart[i]}  N${totalPrice[i]}`)
  }
  for (let i = 0; i < totalPrice.length; i++) {
    sum += totalPrice[i]
  }
  console.log(`\nYou have ${cart.length} item(s) in your cart`)
  console.log(`The items in your cart are ${items}`)
  console.log(`\nThe total price of the items are N${sum}`)

  console.log("A) Checkout")
  console.log("B) Return to Category Menu")
  console.log("C) Remove item from cart")
  console.log("Z) Exit Store")

  let userInput = prompt("Select: ")
  userInput = userInput.toUpperCase()
  if (userInput == "A") {
    console.log("\nReciept")
    console.log(`\nHello ${name}`)
    console.log(`You bought ${cart.length} items from our store`)
    console.log(`Your total spend was N${sum}`)
    console.log("\nThank you for shopping with us")
    exitStore()
  } else if (userInput == "B") {
    storeFunction()
  } else if (userInput == "C") {
    removeItem(cart, totalPrice, sum)
  } else if (userInput == "Z") {
    exitStore()
  } else {
    console.log(
      "\nI don't think you should be choosing the wrong category at this stage..."
    )
    checkout()
  }
}

// Remove items from cart
function removeItem(cart, totalPrice, sum) {
  let cartItems = ""
  let numCount = 0
  for (let i = 0; i < cart.length; i++) {
    numCount++
    cartItems = cartItems + "\n" + String(numCount + ") " + cart[i])
  }
  console.log(`\nThe items in your cart are: ${cartItems}`)

  let itemRemove = prompt(
    "\nPick the item you want to remove or press Y to go back to checkout menu: "
  )
  itemRemove = itemRemove.toUpperCase()
  if (itemRemove == "Y") {
    checkout()
  } else {
    itemRemove = +itemRemove
    let cartLength = cart.length + 1
    for (let i = 1; i < cartLength; i++) {
      if (i == itemRemove) {
        itemRemove = itemRemove - 1
        cart.splice(itemRemove, 1)
        sum -= totalPrice[i]
        totalPrice.splice(itemRemove, 1)
      }
    }
    removeItem(cart, totalPrice, sum)
  }
}

// exit function
function exitStore() {
  console.log("\nGoodbye, come shop with us again")
  return 0
}

// calling the main store function
storeFunction()
