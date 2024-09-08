/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50 cft
*/

function woodQuantity (chairQuantity, tableQuantity, bedQuantity) {
    const perChairQuantity = 3;
    const perTableQuantity = 10;
    const perBedQuantity = 50;
    
    // per quantity calculation
    const totalChairQuantity = perChairQuantity * chairQuantity;
    const totalTableQuantity = perTableQuantity * tableQuantity;
    const totalBedQuantity = perBedQuantity * bedQuantity;

    // total calculation
    const total = totalChairQuantity + totalTableQuantity + totalBedQuantity;
    return total;
}

const woodTotal = woodQuantity(2, 3, 5);
// console.log(woodTotal);


/**
 * const products = [
    { name: 'shampoo', price: 300, quantity: 2 },
    { name: 'chiruni', price: 100, quantity: 3 },
    { name: 'shirt', price: 700, quantity: 5 },
    { name: 'pant', price: 1200, quantity: 1 },
]
 */

const products = [
    {name: "shampoo", price: 300},
    {name: "chiruni", price: 100},
    {name: "shirt", price: 700},
    {name: "pant", price: 1200}
]

function productsPrice (products) {
    let total = 0;
    for (const product of products) {
        total = total + product["price"]
    };
    return total;
}

const totalPrice = productsPrice(products)
// console.log(totalPrice)


/**
 * const products = [
    { name: 'shampoo', price: 300, quantity: 2 },
    { name: 'chiruni', price: 100, quantity: 3 },
    { name: 'shirt', price: 700, quantity: 5 },
    { name: 'pant', price: 1200, quantity: 1 },
]
 */

const products1 = [
    {name: "shampoo", price: 300, quantity: 2},
    {name: "chiruni", price: 100, quantity: 3},
    {name: "shirt", price: 700, quantity: 5},
    {name: "pant", price: 1200, quantity: 2}
]

function shoppingCart(products) {
    let total = 0;
    
    for (const product of products) {
         
        total = total + product["quantity"] * product["price"]
    };
    return total
};

const totalShop = shoppingCart(products1)
console.log(totalShop);
