import React from 'react';
import './NotFound.css';
import Logo from './logo';

function NotFound() {
    return (
        <div id='notFound'>

            <div id='divForLogo'>
                <Logo />
            </div>
            <div id='contentNotFound'>

                <img src='Sad.png' alt='' id='sadIconNotFound' />
                <h1 id='titleNotFound'>404 <br />Not Found</h1>
            </div>
        </div>
    );
}

export default NotFound;