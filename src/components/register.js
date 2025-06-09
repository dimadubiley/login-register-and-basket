import React from 'react';
import './register.css';

function Register() {
    return (

        <div id='register'>
            <h1 id='titleRegister'>MYRA</h1>

            <div id='wrappRegister'>
                <div id='leftRegister'>
                    <h2 id='titleH2Register'>Register</h2>

                    <div id='formRegister'>
                        <div className='formRegister'>
                            <input type="text" className='inputRegister' placeholder="E-Mail" />
                        </div>
                        <hr className='hrRegister' />
                        <div className='formRegister'>
                            <input type="password" className='inputRegister' placeholder="Password" />
                        </div>
                        <hr className='hrRegister' />
                        <div className='formRegister'>
                            <input type="text" className='inputRegister' placeholder="Name" />
                        </div>
                        <hr className='hrRegister' />
                        <div className='formRegister'>
                            <input type="text" className='inputRegister' placeholder="Surname" />
                        </div>
                        <hr className='hrRegister'/>


                        <div className='agreeRegister'>
                            <input type="checkbox" className='checkboxInAtreeRegister'></input>
                            <p className='pInAgreeRegister'>I want to receive personalized commercial messages from NAME by email.</p>
                        </div>
                        <div className='agreeRegister'>
                            <input type="checkbox" className='checkboxInAtreeRegister'></input>
                            <p className='pInAgreeRegister'>I have read and understand the privacy policy and use of cookies</p>
                        </div>

                        <button id='bntRegister'>Sing in</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;