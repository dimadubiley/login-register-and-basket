import React from 'react';
import './login.css';
import Logo from './logo';

function Login() {
    return (

        <div id='login'>
            <Logo/>

            <div id='wrappLogin'>
                <div id='leftLogin'>
                    <h2 id='titleH2Login'>LOGIN</h2>

                    <div id='formLogin'>
                        <div className='formLogin'>
                            <input type="text" className='inputLogin' placeholder="E-MAIL" />
                        </div>
                        <hr className='hrLogin' />
                        <div className='formLogin'>
                            <input type="password" className='inputLogin' placeholder="PASSWORD" />
                        </div>
                        <hr className='hrLogin' />

                        <p id='forgotePassLogin'>Forgot your password?</p>

                        <div id='divBntLoginAndSingUp'>
                            <button id='bntLogin'>LOGIN</button>
                            <button id='bntSingUp'>SING UP</button>
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