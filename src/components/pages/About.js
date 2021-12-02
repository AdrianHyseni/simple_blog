import React from 'react'
import '../../App.css'
import Section from '../section/Section'
import Banner from '../banner/Banner'
import {bannerObjOne,aboutObjone,aboutObjTwo, bannerObjTwo} from './Content/AboutContent'



function Services() {
    return (
        <div className='container'>
        <Banner {...bannerObjOne}/>
        <Section {...aboutObjone}/>
        <Banner {...bannerObjTwo}/>
        <Section {...aboutObjTwo}/>
        </div>
    )
}

export default Services
