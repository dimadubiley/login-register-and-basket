import React from 'react';
import './favorite.css'
import NavDD from './navDD';

function Favorite()
{
    return(
        <div id='favorite'>
            <NavDD/>

            <p id='textFasvorite'>tutashka`s cart</p>
            <img src='/bookmarkFavorite.png' id='bookmarkFavorite'/>
            <p id='textUnderBookmarkFavorite'>You don't have any saved goods</p>
            <p>Save your favorite products and share them with anyone else.</p>
        </div>
    );
}

export default Favorite;