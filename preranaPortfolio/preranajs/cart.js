
let product = [
    {id: 1, name: 'Macbook', price: 1000},
    {id: 2, name: 'Iphone', price: 800},
    {id: 3, name: 'Ipad', price: 600},
    {id: 4, name: 'Watch', price: 500},
    {id: 5, name: 'Airpods', price: 300}
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



addToCart(3, 8);
addToCart(1, 2);
console.log(cart)

function removeProductFromCart(productId){
    let productFound = false;
 
 
    if(cart.length === 0){
        console.log('Cart is empty');
        return;
    }
 
 
    if(cart[cart.length - 1].id === productId){
        cart.pop();
        productFound = true;
        console.log('Last product removed from cart using pop');
    }
 
    if(!productFound){
        console.log('Only the last product can be removed with pop or product not found');
    }
}
 
addToCart(3, 8);
addToCart(1, 2);
console.log('Cart before removing:', cart);
 
removeProductFromCart(1);
console.log('Cart after removing:', cart);
 
removeProductFromCart(3);
console.log('Cart final:', cart);
 
 
 
 