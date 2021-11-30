import React from 'react'
import './Auth.css'
import { Button } from '../../Buttons/Button'



function SignUp() {
    return (
        <div className='signup__container'>
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
                 
             > Sign Up </Button>
         </form>
            </div>
        </div> 
        )
}

export default SignUp
