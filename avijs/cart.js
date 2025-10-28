
let product = [
    {id: 1, name: 'Macbook', price: 1000, stock: 5},
    {id: 2, name: 'Iphone', price: 800, stock: 6},
    {id: 3, name: 'Ipad', price: 600, stock: 0},
    {id: 4, name: 'Watch', price: 500, stock: 0},
    {id: 5, name: 'Airpods', price: 300, stock: 10}
]


let cart = [];


function addToCart(productId, quantity){

    // let productFound = false;
    // for(let i = 0; i < product.length; i++){
    //     if(productId === product[i].id){
    //         productFound = true;
    //         break;
    //     }
    // }

    // if(productFound){
    //     console.log('product is found we are going add in cart')
    //     //some logice to add the product in the cart


    //     return
       
    // }
    // console.log('Product not found')

    let fp = product.find(p => p.id === productId);


    if(fp){
        // console.log('product is found we are going add in cart')
        let item = cart.find(c => c.id === productId);
        if(item){
            item.quantity += quantity;
        }else{
            let newItem = {
                ...fp,
                quantity
            }
            cart.push(newItem);
            // cart.push({
            //     ...fp,
            //     quantity
            // })
        }
        return
    }
    console.log('Product not found')

}


function removeProductFromCart(productId){
    cart = cart.filter(p => p.id !== productId);
}

const calculateToatal = (cart) => {
    // let total = 0;
    // for(let i = 0; i < cart.length; i++){
    //     let cartSum = cart[i].price * cart[i].quantity;
    //     total += cartSum
    // }
    // return total;

    return cart.reduce((total, i) => total + i.price * i.quantity, 0)

}


addToCart(3, 8);
addToCart(1, 2);
addToCart(5, 1)
console.log(cart)


console.log("after removing the product from the cart")

removeProductFromCart(1);

console.log(cart)

console.log("total amount", calculateToatal(cart))