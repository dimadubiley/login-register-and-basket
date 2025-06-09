import React from 'react';
import './login.css';

function Login() {
    return (

        <div id='login'>
            <h1 id='titleLogin'>SWAGA</h1>

            <div id='wrappLogin'>
                <div id='leftLogin'>
                    <h2 id='titleH2Login'>Log in</h2>

                    <div id='formLogin'>
                        <div className='formLogin'>
                            <input type="text" className='inputLogin' placeholder="E-Mail" />
                        </div>
                        <hr className='hrLogin' />
                        <div className='formLogin'>
                            <input type="password" className='inputLogin' placeholder="Password" />
                        </div>
                        <hr className='hrLogin' />


                            <button id='bntLogin'>log in</button>
                    </div>
                </div>
                <div id='rightLogin'>
                    <img src='PhotoLogin.png' alt='' id='photoLogin' />
                </div>
            </div>
        </div>
    );
}

export default Login;