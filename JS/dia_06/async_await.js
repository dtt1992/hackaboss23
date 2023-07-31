async function getProduct() {
    const data = await fetch('https://fakestoreapi.com/products/1')
    const product = await data.json()
    console.log(product)
}

console.log(getProduct())
