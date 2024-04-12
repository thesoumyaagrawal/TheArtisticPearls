const Cart = require("../models/cart.model");

async function createCart(user){
    try {
        const cart = new Cart({user});
        const createdCart = await cart.save();
        return createdCart;
        
    } catch (error) {
        throw new error(error.message);
    }
}

module.exports={ createCart}