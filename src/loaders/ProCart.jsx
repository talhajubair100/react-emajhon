import { getStorecart } from "../utilities/fakedb";

export const ProCart = async () => {
    const productsData = await fetch('./products.json');
    const products = await productsData.json();
    // return products;

    const savedCart = getStorecart();
    const previousCart = [];
    console.log("sss",savedCart)
    for(const id in savedCart) {
        const addedProduct = products.find(product => product.id === id);
        console.log(addedProduct);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
        }
    }

    return {products, previousCart};


}
