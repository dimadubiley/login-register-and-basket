import React from 'react';
import './login.css';

function Login() {
    return (

        <div id='login'>
            <h1 id='titleLogin'>MYRA</h1>

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

                        <p id='forgotePassLogin'>Forgot your password?</p>

                        <div id='divBntLoginAndSingUp'>
                            <button id='bntLogin'>login</button>
                            <button id='bntSingUp'>Sing up</button>
                        </div>
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