const inventory = [
  { id: 101, name: "Laptop", price: 1200, quantity: 5 },
  { id: 102, name: "Mouse", price: 25, quantity: 50 },
  { id: 103, name: "Keyboard", price: 75, quantity: 30 },
  { id: 104, name: "Monitor", price: 300, quantity: 15 },
  { id: 105, name: "Webcam", price: 50, quantity: 25 },
];

function addProduct(id, name, price, quantity) {
    
    if(inventory.some((obj)=>obj.id === id)){
        console.log(`Product with ${id} ID already exists`)
    }else{
        inventory.push({id, name, price, quantity})
    }
}

function updateQuantity(productId, newQuantity){
    const findProd = inventory.find((product)=> product.id === productId)
    if(findProd){
        inventory[inventory.indexOf(findProd)].quantity = newQuantity
    }else{
        console.log("Product Not Found")
    }
}

function displayInventory() {
    for(const product of inventory){
        const productValues = Object.entries(product)
        console.log(`ID: ${productValues[0][1]}`)
        console.log(`Name: ${productValues[1][1]}`)
        console.log(`Price: $${productValues[2][1]}`)
        console.log(`Qty: ${productValues[3][1]}`)
        console.log("")
    }

}
addProduct(106, "Headphones", 150, 20)
addProduct(107, "Printer", 200, 10)
addProduct(108, "External Hard Drive", 80, 40)
addProduct(102, "USB Flash Drive", 15, 100)
addProduct(105, "Desk Chair", 100, 8)
updateQuantity(103, 42)
updateQuantity(106, 26)
updateQuantity(112, 6)
displayInventory()

