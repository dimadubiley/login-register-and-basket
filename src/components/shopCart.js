import React from 'react';
import './shopCart.css';
import './cartForShopCart.css';

let arrForRecomendetedCarts = [
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' },
    { img: '/Flacone.png', desk: '1234', price: '1990 UAN' }
];
let arrForFavoriteCarts = [
    { img: '/Flacone.png', desk: 'PARFUMATED WATER RED MYRA TEMPTATION', price: '1990 UAN' },
    { img: '/Flacone.png', desk: 'PARFUMATED WATER RED MYRA TEMPTATION', price: '1990 UAN' },
    { img: '/Flacone.png', desk: 'PARFUMATED WATER RED MYRA TEMPTATION', price: '1990 UAN' }
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
        <div>
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
            <img src={props.img} alt='' className='fhotoForShopCart' />
            <p className='deskFavoroteCart'>{props.desk}</p>
            <p className='priceFavoriveCart'>{props.price}</p>

            <div className='countTovarShopCart'>
                <p className='pForContTovarShopCart'>-</p>
                <p className='pForContTovarShopCart'>1</p>
                <p className='pForContTovarShopCart'>+</p>
            </div>
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
            <div id='navShopCart'>
                <button className='btnNavShopCart'>shop cart</button>
                <button className='btnNavShopCart'>favotites</button>
                <img src='Bookmark.png' alt='' id='bookmarkShopCart' />
            </div>
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