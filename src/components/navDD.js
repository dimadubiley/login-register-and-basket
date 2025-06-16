import React from "react";
import './navDD.css';

function NavDD() {
    return (
        <div id='navShopCart'>
            <button className='btnNavShopCart'>shop cart</button>
            <button className='btnNavShopCart'>favotites</button>
            <img src='Bookmark.png' alt='' id='bookmarkShopCart' />
        </div>
    );
}

export default NavDD;