import React from 'react';
import './shopCart.css';
import './cartForShopCart.css';
// import {Cart, CartFavorite}  from './cartForShopCart';
function Cart() {
    return (
        <div className='cartShopCart'>
            <img src='Flacone.png' alt='' className='fhotoForShopCart' />
            <div className='cartContentShopCart'>
                <p>PARFUMATED WATER RED MYRA TEMPTATION</p>
                <p>499,00 UAH</p>
            </div>
        </div>
    );
}
function CartFavorite() {
    return (
        <div className='cartInFaoriteShopCart'>
            <img src='Flacone.png' alt='' className='fhotoForShopCart' />
            <p>ДЖИНСИ TRF WIDE-LEG З ВИСОК</p>
            <p className='priceFavoriveCart'>1 799,00 UAH</p>

            <div className='countTovarShopCart'>
                <p className='pForContTovarShopCart'>-</p>
                <p className='pForContTovarShopCart'>1</p>
                <p className='pForContTovarShopCart'>+</p>
            </div>
        </div>
    );
}
function ShopCart() {
    return (
        <div id='wrappShopCart'>
            <div id='navShopCart'>
                <button className='btnNavShopCart'>shop cart</button>
                <button className='btnNavShopCart'>favotites</button>
                <img src='Bookmark.png' alt='' id='bookmarkShopCart' />
            </div>
            <div id='divUnderNavShopCart'>

                <CartFavorite/>
                <CartFavorite/>
                <CartFavorite/>
                <CartFavorite/>
                <CartFavorite/>

            </div>

            <div id='divForProportisShopCart'>
                <p>can also hit you up</p>

                <div id='cartsShopCart'>
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                    <Cart />
                </div>
            </div>
        </div>
    );
}

export default ShopCart;