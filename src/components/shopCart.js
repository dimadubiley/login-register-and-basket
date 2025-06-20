import React from 'react';
import './shopCart.css';
import './cartForShopCart.css';
import NavDD from './navDD';

let arrForFavoriteCarts = [
    { img: '/1photoInCart.png', desk: 'cool baggy jeans', price: '1.488 UAN' },
];

let arrForRecomendetedCarts = [
    { img: '/1photoCart.png', desk: 't-shirt', price: '1.488 UAN' },
    { img: '/3photoCart.png', desk: 'violet baggy jeans', price: '1.488 UAN' },
    { img: '/5photoCart.png', desk: 'cool guy', price: '1.488 UAN' },
    { img: '/5photoCart.png', desk: 'baggy jeans', price: '1.488 UAN' },
    { img: '/6photoCart.png', desk: 'baggy jeans', price: '1.488 UAN' },
    { img: '/4photoCart.png', desk: 'yellow', price: '1.488 UAN' },
    { img: '/7photoCart.png', desk: 'white swimsuit', price: '1.488 UAN' },
    { img: '/2photoCart.png', desk: 'pink sweater', price: '1.488 UAN' },
    { img: '/9photoCart.png', desk: 'shoes', price: '1.488 UAN' },
    { img: '/10photoCart.png', desk: 'cool', price: '1.488 UAN' },
];


//------------------------------------------------------------------------------
function Cart(props) {
    return (
        <div className='cartShopCart'>
            <img src={props.img} alt='' className='fhotoForShopCart' />
            <div className='cartContentShopCart'>
                <p>{props.desk}</p>
                <p>{props.price}</p>
            </div>
        </div>
    );
}
export function PrintCarts() {
    return (
        <div id='DivCarts'>
            {arrForRecomendetedCarts.map(item => (
                <Cart img={item.img} desk={item.desk} price={item.price} />
            ))}
        </div>
    );

}

//------------------------------------------------------------------------------
function FavoriteCart(props) {
    return (
        <div className='cartInFaoriteShopCart'>
            <img src={props.img} alt='' className='fhotoForShopCartFavorite' />
            <p className='deskFavoroteCart'>{props.desk}</p>
            <p className='priceFavoriveCart'>{props.price}</p>
        </div>
    );
}
export function PrintFavoriteCarts() {
    return (
        <div>
            {arrForFavoriteCarts.map(item => (
                <FavoriteCart img={item.img} desk={item.desk} price={item.price} />
            ))}
        </div>
    );

}

//------------------------------------------------------------------------------
function ShopCart() {
    return (
        <div id='wrappShopCart'>
            <NavDD />
            <div id='divUnderNavShopCart'>
                <PrintFavoriteCarts />
            </div>

            <div id='divForProportisShopCart'>
                <p>can also hit you up</p>

                <div id='cartsShopCart'>
                    <PrintCarts />
                </div>
            </div>
        </div>
    );
}

export default ShopCart;