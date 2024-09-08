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
    { name: 'shampoo', price: 300 },
    { name: 'chiruni', price: 100 },
    { name: 'shirt', price: 700 },
    { name: 'pant', price: 1200 }
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
console.log(totalPrice)
