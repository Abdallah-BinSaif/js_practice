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
// console.log(totalShop);


/**
 * upto 100: ---> 100
 * more than 101-200: --> 90
 * more than 200: --> 70
*/

const quantity = 201;
function discount (quantity) {
    
    const priceUpto100 = 100;
    const priceUpto200 = 90;
    const priceMoreThan200 = 70;
    if (quantity <= 100) {
        price = quantity * priceUpto100
        return price;
    } else if (quantity <= 200) {
        price = quantity * priceUpto200
        return price;
    } else if (quantity > 200) {
        price = quantity * priceMoreThan200
        return price;
    }

};

const discountedPrice = discount(quantity);
// console.log(discountedPrice);


function layeredDiscount (quantity) {
    const priceUpto100 = 100;
    const priceUpto200 = 90;
    const priceMoreThan200 = 70;

    if(quantity <= 100) {
        const result = priceUpto100 * quantity;
        return result;
    }else if (quantity <= 200) {
        const priceBefore100 = 100 * priceUpto100;
        const newQuantity = quantity - 100;
        const priceBefore200 = newQuantity * priceUpto200;
        const result = priceBefore100 + priceBefore200;
        return result;
    }else if (quantity > 200) {
        const priceBefore100 = 100 * priceUpto100;
        const priceBefore200 = 100 * priceUpto200
        const newQuantity = quantity - 200;
        const priceAbove200 = newQuantity * priceMoreThan200;
        const result = priceBefore100 + priceBefore200 + priceAbove200;
        return result;
    }
}

const LayerDiscount = layeredDiscount(quantity);
console.log(LayerDiscount)

