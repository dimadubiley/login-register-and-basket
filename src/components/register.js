import React from 'react';
import './register.css';
import Logo from './logo';


function Register() {
    return (

        <div id='register'>
            <Logo />

            <div id='wrappRegister'>
                <div id='leftRegister'>
                    <h2 id='titleH2Register'>SIGN UP</h2>

                    <div id='formRegister'>

                        <div className='formRegister'>
                            <input type="text" className='inputRegister' placeholder="NAME" />
                        </div>
                        <hr className='hrRegister' />
                        <div className='formRegister'>
                            <input type="text" className='inputRegister' placeholder="SURMANE" />
                        </div>
                        <hr className='hrRegister' />
                        <div className='formRegister'>
                            <input type="text" className='inputRegister' placeholder="E-MAIL" />
                        </div>
                        <hr className='hrRegister' />
                        <div className='formRegister'>
                            <input type="password" className='inputRegister' placeholder="PASSWORD" />
                        </div>
                        <hr className='hrRegister' />

                        <div id='agrees'>
                            <div className='agreeRegister'>
                                <input type="checkbox" className='checkboxInAtreeRegister'></input>
                                <p className='pInAgreeRegister'>I want to receive personalized commercial messages from NAME by email.</p>
                            </div>
                            <div className='agreeRegister'>
                                <input type="checkbox" className='checkboxInAtreeRegister'></input>
                                <p className='pInAgreeRegister'>I have read and understand the privacy policy and use of cookies</p>
                            </div>
                        </div>

                        <button id='bntRegister'>SING UP</button>
                        <button id='bntLoginRegister'>LOGIN</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;