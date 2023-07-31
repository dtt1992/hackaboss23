;(async () => {

    const state = {}

    const listProducts = document.querySelector(".products")

    async   function init() {
        state.products = await getProduct()
        render()
    }

    async function getProduct() {
        try{
            const data = await fetch("https://fakestoreapi.com/products")
            const products = await data.json()
            return products

        }catch(error){
            console.error(error)
        }
    }
    function render() {
        const html = state.products.map((product) => 
        `<li class="product">
            <div class="product__image-container">
                <img src="${product.image}" alt="${product.description}" class="product__image">
            </div>
            <div class="product__content">
                <h4 class="productt__title">${product.title}</h4>
            </div>
        </li>`)
        listProducts.innerHTML = html.join(" ")
    }
    init()
})()


