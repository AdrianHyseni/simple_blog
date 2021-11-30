import React from 'react'
import { Button } from '../../Buttons/Button'
import '../Auth/Auth.css'

function Login() {
    return (
        <div className='login__container'>
           <div className='login__leftside'>
               <img src='/images/hands.jpg' className='login__image' alt='login-img'/>
           </div> 
           <div className='login__rightside'>
               <div className='login__card'>
               <form className='login__form' >
                <i className='fa fa-user'/>
                <input type='text' placeholder='Enter Email'/>
                <input type='password' placeholder='Enter Password'/>
                <br/>
                <Button
                     className='btns'
                     buttonStyle='btn--second'
                     buttonSize='btn--large'
                    
                > Login </Button>
            </form>
               </div>
           </div> 
        </div>
    )
}

export default Login
