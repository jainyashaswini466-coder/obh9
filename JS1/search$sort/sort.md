const products = [
    { name: 'Laptop', price: 50000, stock: 5 },
    { name: 'Mouse', price: 500, stock: 0 },
    { name: 'Keyboard', price: 1500, stock: 10 },
    { name: 'Monitor', price: 50000, stock: 3 }
];

// Sort by price, if same price then by stock
products.sort((a, b) => {
    if (a.price !== b.price) {
        return a.price - b.price; // Primary sort by price
    }
    return b.stock - a.stock; // Secondary sort by stock (descending)
});

console.log(products);
// Mouse (500, 0), Keyboard (1500, 10), Laptop (50000, 5), Monitor (50000, 3)