import React from "react";
import {Link} from "react-router-dom";
import {BsXDiamond, GiCrystalize} from "react-icons/all";
import {Button} from "../Buttons/Button";
import {IconContext} from 'react-icons/lib'
import './Pricing.css';

function Pricing(props) {
    return (
        <>
        <IconContext.Provider value={{color:'#fff',size:64}}>
        <div>
            <div className='pricing__section'>
                <div className='pricing__wrapper'>
                    <h1 className='pricing__heading'>{props.title}</h1>
                    <div className='pricing__container'>
                        <Link to='signup' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div class='icon'>
                                <i class={props.firsticon}/>
                                </div>
                                <h3>{props.firstCardTitleName}</h3>
                                <h4>{props.firstCardName}</h4>
                                <div className='pricing__container-features'>
                                    <p>{props.FirstCardp}</p>
                                </div>
                                <Button className='btns'
                                    buttonStyle='btn--primary'
                                    buttonSize='btn--large'>
                                    {props.FirstCarBtn}
                                </Button>
                            </div>
                        </Link>
                        <Link to='signup' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div class='icon'>
                                <i class={props.secondicon}/>
                                </div>
                                <h3>{props.secondCardTitleName}</h3>
                                <h4>{props.secondCardName}</h4>
                                <p>{props.secondCardp}</p>
                                <div className='pricing__container-features'>
                                   <p>{props.secondCardp}</p>
                                </div>
                                <Button buttonSize='btn-large' buttonColor='blue'>
                                    {props.secondCardBtn}
                                </Button>
                            </div>
                        </Link>
                        <Link to='signup' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div class='icon'>
                                <i class={props.thirdicon}/>
                                </div>
                                <h3>Diamond</h3>
                                <h4>$8.99</h4>
                                <p>per month</p>
                                <ul className='pricing__container-features'>
                                    <li>100 Unlimited</li>
                                    <li>5% Cash Back</li>
                                    <li>$10000 Limit</li>
                                </ul>
                                <Button className='btns'
                                    buttonStyle='btn--primary'
                                    buttonSize='btn--large'>
                                    Choose Plane
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
       </>
    );
}

export default Pricing