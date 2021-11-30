import React from "react";
import {Link} from "react-router-dom";
import {Button} from "../Buttons/Button";
import './Banner.css'

function Banner({
    bgImage, title, description,buttonLabel,lightText,buttonTheme
                }){
    return (
        <>
            <div   className='banner__hero-section' >
            <div className='banner__container'>
            <div className='banner__hero-row'>
            <div className='banner__col'>
            <div className='banner__hero-text-wrapper'>
            <h1 className={lightText ? 'heading':'heading dark'}>{title}</h1>
            <p className={lightText ? 'banner__hero-subtitle':'banner__hero-subtitle dark'}>{description}</p>
            <Link to='/signup'>
            <Button
          buttonStyle={buttonTheme ==='dark'?'btn__second':'btn--primary'}
          buttonSize='btn--large'
        >
          {buttonLabel}
        </Button>
            </Link>
            </div>
            </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Banner;