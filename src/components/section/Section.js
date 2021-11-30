import React from "react";
import {Button} from '../Buttons/Button'
import {Link} from 'react-router-dom'
import './Section.css'




function Section({
    lightBg, topLine, lightText, lightTextDesc, headline,description,buttonLabel, img, alt, imgStart
                     }){
    return (
        <>
            <div className={ lightBg ? 'home__hero-section': 'home__hero-section darkBg'}>
                <div className='container'>
                    <div className='row home__hero-row' style={{display:'flex', flexDirection:imgStart === 'start'
                    ? 'row-reverse':'row'}}>
                        <div className='col'>
                            <div className='home_hero-text-wrapper'>
                                <div className='top-line'>{topLine}</div>
                                <h1 className='heading'>{headline}</h1>
                                <div className='paragraph'>
                                <p className={lightText ? 'home__hero-subtitle':'home__hero-subtitle dark'}>{description}</p>
                                </div>
                                <Link to='/signup'>
                                    <Button
                                        buttonStyle='btn'
                                        buttonSize='btn--large'>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Section