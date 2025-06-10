import React from 'react';
import './shopCart.css';
import Cart from './cartForShopCart';
function ShopCart() {
    return (
        <div id='wrappShopCart'>
            <div id='navShopCart'>
                <button className='btnNavShopCart'>shop cart</button>
                <button className='btnNavShopCart'>favotites</button>
                <img src='Bookmark.png' alt='' id='bookmarkShopCart' />
            </div>
            <div id='divUnderNavShopCart'>
                <img src='cartshopCart.png' alt='' id='imgcartshopCart' />
                <p>your cart is empty</p>
            </div>

            <div id='divForProportisShopCart'>
                <p>can also hit you up</p>

                <div id='cartsShopCart'>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                <Cart/>
                </div>
            </div>
        </div>
    );
}

export default ShopCart;