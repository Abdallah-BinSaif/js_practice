const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Keyboard", price: 75, category: "Electronics" },
  { name: "Mouse", price: 25, category: "Electronics" },
  { name: "Desk Chair", price: 300, category: "Furniture" },
  { name: "Monitor", price: 250, category: "Electronics" },
  { name: "Bookshelf", price: 150, category: "Furniture" }
];
const electronicProductNames = [];
for (const product of products){
    if(product.category == "Electronics"){
        electronicProductNames.push(product.name)
    }
}
console.log(electronicProductNames)